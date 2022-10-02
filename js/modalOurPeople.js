const backdrop = document.querySelector('.modalOurPeopleOverlay');
const openBtn = document.querySelector('.openModalOurPeople');
const closeBtn = document.querySelector('.modalOurPeopleClose');

openBtn.addEventListener('click', onOpenModal);
closeBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onTargetKeydown);
  backdrop.addEventListener('click', onBackdropClick);
  document.body.style.overflow = 'hidden';
}

function onCloseModal() {
  backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onTargetKeydown);
  // backdrop.removeEventListener('click', onBackdropClick);
  document.body.style.overflow = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onTargetKeydown(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
