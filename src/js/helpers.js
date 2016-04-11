export class Helpers {
  constructor() {}

  hyphenCase(str) {
    str = str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });

    return str.replace(/\s/g, '-').replace(/^-+/g, '');
  }

  setVisible(el) {
    el.style.opacity = 1;
    el.style.display = 'block';
  }

  safeAttrName(name) {
    let safeAttr = {
      className: 'class'
    };

    return safeAttr[name] || this.hyphenCase(name);
  }

  fadeOut(overlay, duration = 500) {
    var increment = 1 / (duration / 60);
    overlay.style.opacity = 1;
    (function fade() {
      var val = Number(overlay.style.opacity) - increment;
      if (val > 0) {
        overlay.style.opacity = val;
        requestAnimationFrame(fade);
      } else {
        overlay.remove();
      }
    })();
  }

  // fade in
  fadeIn(overlay, duration = 500) {
    var _helpers = this;
    var increment = 1 / (duration / 60);

    if (overlay.classList.contains('modal-hidden')) {
      overlay.classList.remove('modal-hidden');
    }
    overlay.style.opacity = 0;
    overlay.style.display = 'block';

    (function fade() {
      var val = Number(overlay.style.opacity) + increment;
      if (val < 1) {
        overlay.style.opacity = val;
        requestAnimationFrame(fade);
      } else {
        _helpers.setVisible(overlay);
        // animation has completed
      }
    })();
  }

  makeControlBar(controls) {
    let helpers = this,
      controlBar = [];
    for (var i = 0; i < controls.length; i++) {
      let control = helpers.markup({ tag: 'li', content: controls[i].label, attrs: {title: controls[i].label, className: 'modal-' + controls[i].type} });
      if (controls[i].action) {
        control.onclick = controls[i].action;
      }
      controlBar.push(control);
    }

    return helpers.markup({ tag: 'ul', content: controlBar, attrs: { className: 'modal-controls' } });
  }

  markup(opts) {
    let contentType,
      field = document.createElement(opts.tag),
      getContentType = function(content) {
        return Array.isArray(content) ? 'array' : typeof content;
      },
      appendContent = {
        string: function(content) {
          field.innerHTML = content;
        },
        object: function(content) {
          return field.appendChild(content);
        },
        array: function(content) {
          for (var i = 0; i < content.length; i++) {
            contentType = getContentType(content[i]);
            appendContent[contentType](content[i]);
          }
        }
      };

    if (opts.attrs) {
      for (var attr in opts.attrs) {
        if (opts.attrs.hasOwnProperty(attr)) {
          if (opts.attrs[attr]) {
            let name = this.safeAttrName(attr);
            field.setAttribute(name, opts.attrs[attr]);
          }
        }
      }
    }

    contentType = getContentType(opts.content);

    if (opts.content) {
      appendContent[contentType].call(this, opts.content);
    }

    return field;
  }

}

/**
 * Events class is used to register events and throttle their callbacks
 */
export class Events {
  constructor() {
    this.modalOpen = new Event('modalOpen');
    this.modalClosed = new Event('modalClosed');
  }

  /**
   * Add an event and register callbacks
   * @param {String}   event [description]
   * @param {Function} cb    [description]
   */
  add(event, cb, elem = window) {
    let events = this;
    events[event] = events[event] || { callbacks: [] };
    events.addCallback(event, cb);
    let callback = function(evt) {
      events.throttle(events[event], evt);
    };
    // if (!events[event].callbacks.length) {
    elem.addEventListener(event, callback);
    // }
    return callback;
  }

  remove(event, cb, elem = window) {
    let events = this;
    events[event] = events[event] || { callbacks: [] };
    events.addCallback(event, cb);
    let callback = function(evt) {
      events.throttle(events[event], evt);
    };
    // if (!events[event].callbacks.length) {
    elem.addEventListener(event, callback);
    // }
    return callback;
  }

  /**
   * Adds a callback to an array of callbacks for an event
   * @param {String}   event
   * @param {Function} cb
   */
  addCallback(event, cb) {
    let events = this;
    if (cb) {
      events[event].callbacks.push(cb);
    }
  }

  /**
   * Run the callbacks for a specific event
   * @param  {Object} event
   */
  runCallbacks(event, evt) {
    event.callbacks.forEach(function(callback) {
      callback(evt);
    });

    event.running = false;
  }

  /**
   * Throttle an event
   * @param  {Object} event {running, callbacks}
   */
  throttle(event, evt) {
    let events = this;

    if (!event.running) {
      event.running = true;
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(function() {
          events.runCallbacks(event, evt);
        });
      } else {
        setTimeout(events.runCallbacks.bind(event), 66);
      }
    }
  }


  drag(events, evt) {
    let drag = {},
      modal = this;

    function getOffset(modal, evt) {
      let halfWidth = modal.offsetWidth / 2,
      halfHeight = modal.offsetHeight / 2;

      return {
        x: (evt.clientX - modal.offsetLeft + halfWidth) - halfWidth,
        y: (evt.clientY - modal.offsetTop + halfHeight) - halfHeight
      };
    }

    drag.move = function(evt) {
      let coords = {
        x: evt.clientX - drag.offset.x,
        y: evt.clientY - drag.offset.y
      };

      modal.style.position = 'absolute';
      modal.style.top = coords.y + 'px';
      modal.style.left = coords.x + 'px';
    };

    drag.stop = function() {
      events.mousemove.callbacks = [];
      window.removeEventListener('mouseup', drag.stop);
    };

    drag.start = (function(evt) {
      if (evt.target !== modal && !evt.target.classList.contains('modal-move')) {
        return false;
      }
      drag.offset = getOffset(modal, evt);
      window.addEventListener('mouseup', drag.stop);
      events.add('mousemove', drag.move);
    })(evt);

  }

}
