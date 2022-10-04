let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('limpid');
  setTimeout(() => {
    mask.remove();
  }, 600);
});
