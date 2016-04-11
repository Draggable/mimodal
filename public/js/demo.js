((window.gitter = {}).chat = {}).options = {
  room: 'draggable/mimodal'
};

var getScripts = function() {
  var scripts = [];
  var extScripts = [
    '//sidecar.gitter.im/dist/sidecar.v1.js'
  ];

  var i = (extScripts.length - 1);

  function readyState() {
    var script = this;
    if (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') {
      script.onload = script.onreadystatechange = null;
      i--;
      if (i === -1) {
        // remove script after added
        for (i = scripts.length - 1; i >= 0; i--) {
          scripts[i].remove();
        }
      } else {
        getScript(i);
      }
    }
  }

  function getScript(i) {
    var script = document.createElement('script');
    script.appendChild(document.createTextNode(''));
    script.setAttribute('src', extScripts[i]);
    script.setAttribute('type', 'text/javascript');
    script.async = true;
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = readyState;
    scripts.push(script);
    document.body.appendChild(script);
  }

  // if (isSite) {
  getScript(i);
  // }

};

getScripts();

var buttons = document.getElementsByTagName('button');
var buttonCallbacks = {
  simpleWarning: function() {
    var modal = document.querySelector('.mimodal'),
      timerContainer = document.createElement('h1'),
      timer = 3;
    modal.appendChild(timerContainer);
    timerContainer.innerHTML = timer;
    var countDown = function countDown() {
      timerContainer.innerHTML = String(timer--);
      if (timer === 0) {
        clearInterval(countdownInterval);
      }
    };
    var countdownInterval = setInterval(countDown, 1000);
    countDown();
  },
  draggable: function(){
    var modalOptions = {
      modalHeader: 'I\'m Draggable',
      modalContent: 'This modal is draggable, try dragging from the move icon in the control bar or from the borders of the modal.',
      draggable: true
    };
    window.mimodal.dialog(modalOptions);
  }
};

for (var i = 0; i < buttons.length; i++) {
  var callback = buttonCallbacks[buttons[i].id];
  if (callback) {
    buttons[i].addEventListener('click', callback);
  }
}


// var simpleWarningButton = document.getElementById('simple-warning');
// simpleWarningButton.onclick = function() {
//   var modal = document.querySelector('.mimodal'),
//     timerContainer = document.createElement('h1'),
//     timer = 3;
//   modal.appendChild(timerContainer);
//   timerContainer.innerHTML = timer;
//   var countDown = function countDown() {
//     timerContainer.innerHTML = String(timer--);
//     if (timer === 0) {
//       clearInterval(countdownInterval);
//     }
//   };
//   var countdownInterval = setInterval(countDown, 1000);
//   countDown();
// };



// var button = document.getElementById('showModal');

// button.onclick = function(evt) {
//   var header = 'Hello World',
//     // coords = modal.getCoords(this),
//     content = 'If you are reading this, the modal works.';
//   modal.dialog({
//     // coords,
//     header,
//     content
//   });
// };
