// var buttons = document.getElementsByTagName('button'),
//   buttonCallbacks = [
//     function() {
//       var button = this;
//       // button.modal = modal.dialog();
//       modal.dialog.apply(button);
//       // console.log([button]);
//     }
//   ];

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', buttonCallbacks[i]);
// }


var simpleWarningButton = document.getElementById('simple-warning');
simpleWarningButton.onclick = function() {
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
};

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
