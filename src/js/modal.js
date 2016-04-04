// modal.js
import { Helpers, Events } from './helpers';

var _helpers = new Helpers();
var events = new Events();

export default class MoModal {
  constructor(options) {
    let momodal = this;
    momodal.defaults = {
      buttons: [{
        tag: 'button',
        content: 'No',
        attrs: {
          className: 'btn btn-sm btn-danger'
        },
        action: function() {
          momodal.closeDialog();
        }
      }, {
        tag: 'button',
        content: 'Yes',
        attrs: {
          className: 'btn btn-sm btn-success'
        },
        action: function() {
          momodal.closeDialog();
        }
      }],
      coords: {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      },
      className: 'momodal',
      modalTransitionSpeed: 500,
      modalStyle: 'simple',
      prefix: 'modal-'
    };

    events.add('resize', function() {
      momodal.defaults.coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
    });

    momodal.opts = Object.assign(momodal.defaults, options);
  }

  getCoords(elem) {
    let coords = {};
    if (elem) {
      let buttonPosition = elem.getBoundingClientRect(),
        bodyRect = document.body.getBoundingClientRect();
      coords = {
        pageX: buttonPosition.left + (buttonPosition.width / 2),
        pageY: (buttonPosition.top - bodyRect.top) - 12
      };
    } else {
      coords = {
        pageX: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
        pageY: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2
      };
    }
    return coords;
  }

  showOverlay(opts) {
    var modal = this;
    let overlayClass = opts.className + '-overlay';
    let overlay = _helpers.markup({
      tag: 'div',
      attrs: {
        className: overlayClass
      }
    });
    overlay.classList.add(window.momodal.opts.prefix + opts.modalStyle);
    document.body.appendChild(overlay);

    if (opts.modalStyle === 'fade') {
      _helpers.fadeIn(overlay);
    } else {
      _helpers.setVisible(overlay);
    }

    if (opts.modalTimeout) {
      let timeout = Number(opts.modalTimeout);
      setTimeout(function() {
        modal.closeDialog(overlay, opts);
      }, timeout);
    }

    overlay.onclick = function(evt) {
      if (evt.target.classList.contains(overlayClass)) {
        modal.closeDialog(overlay, opts);
      }
    };

    return overlay;
  }

  closeDialog(overlay, opts = this.opts) {
    overlay = overlay || document.querySelector(`.${opts.className}-overlay`);

    overlay.classList.remove(opts.prefix + 'visible');
    overlay.classList.add(opts.prefix + 'removing');

    if (opts.modalStyle === 'fade') {
      _helpers.fadeOut(overlay);
    } else {
      overlay.remove();
    }

    document.dispatchEvent(events.modalClosed);
  }

  dialog(options = {}) {
    let opts = Object.assign({}, window.momodal.defaults, options);
    let modalContent = [];
    let buttons = [];

    var overlay = window.momodal.showOverlay(opts);

    if (opts.modalHeader) {
      modalContent.push(_helpers.markup({ tag: 'header', attrs :{ className: opts.className + '-header'}, content: opts.modalHeader }));
    }

    if (opts.modalContent) {
      modalContent.push(_helpers.markup({ tag: 'div', attrs: { className: opts.className + '-content'}, content: opts.modalContent }));
    }

    if (opts.confirm) {
      var buttonWrap;
      for (var i = 0; i < opts.buttons.length; i++) {
        let button = _helpers.markup(opts.buttons[i]);
        if (opts.buttons[i].action && typeof opts.buttons[i].action === 'function') {
          button.onclick = opts.buttons[i].action;
        }
        buttons.push(button);
      }

      buttonWrap = _helpers.markup({ tag: 'div', attrs: { className: 'btn-group' }, content: buttons });
      modalContent.push(_helpers.markup({ tag: 'footer', attrs : { className: opts.className + '-footer' }, content: buttonWrap }));
    }

    var miniModal = _helpers.markup({ tag: 'div', content: modalContent, attrs: { className: opts.className } });

    if (opts.coords) {
      miniModal.style.position = 'fixed';
    } else {
      miniModal.classList.add('positioned');
    }

    miniModal.style.left = opts.coords.pageX + 'px';
    miniModal.style.top = opts.coords.pageY + 'px';

    overlay.appendChild(miniModal);

    if (opts.confirm) {
      buttons[opts.buttons.length - 1].focus();
    }

    events.add('resize', function() {
      let coords = window.momodal.getCoords();
      miniModal.style.left = coords.pageX + 'px';
      miniModal.style.top = coords.pageY + 'px';
    });

    document.dispatchEvent(events.modalOpen);
    return miniModal;
  }

  confirm(options = {}) {
    let opts = Object.assign({}, window.momodal.defaults, options);
    opts.confirm = true;
    return window.momodal.dialog(opts);
  }
}
