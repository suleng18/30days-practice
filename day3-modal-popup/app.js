const btnOpen = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
const iconClose = document.querySelector('.modal__header i');
const btnClose = document.querySelector('.modal__footer button');

function toggleModal(e) {
  modal.classList.toggle('hide');
}
btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);

modal.addEventListener('click', function (e) {
  if (e.target === e.currentTarget) {
    toggleModal(e);
  }
});
