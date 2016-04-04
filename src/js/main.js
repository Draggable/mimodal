import '../sass/_modal.scss'
import MoModal from './modal'

window.momodal = new MoModal();

var modalTriggers = document.querySelectorAll('[data-toggle]');

function doModal() {
  var modalTrigger = this,
    modalMap = {
      modal: window.momodal.dialog.bind(modalTrigger),
      dialog: window.momodal.confirm.bind(modalTrigger)
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
