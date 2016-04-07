import '../sass/_modal.scss'
import Mimodal from './modal'

window.mimodal = new Mimodal();

var modalTriggers = document.querySelectorAll('[data-toggle]');

function doModal() {
  var modalTrigger = this,
    modalMap = {
      modal: window.mimodal.dialog.bind(modalTrigger),
      dialog: window.mimodal.confirm.bind(modalTrigger)
    },
    options = {};

  for (var prop in modalTrigger.dataset) {
    if (modalTrigger.dataset.hasOwnProperty(prop) && prop.indexOf('modal') !== -1) {
      options[prop] = modalTrigger.dataset[prop];
    }
  }

  modalMap[modalTrigger.dataset.toggle](options);
}

for (var i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].addEventListener('click', doModal);
}
