let offset = 0;
let widthImg = 584;
let widthMargin = 20;

let width = widthImg + widthMargin;

const sliderLine = document.querySelector('.slider-line');

document.querySelector('#forward').addEventListener('click', () => {
  offset += width;
  if (offset > width * 5 - width) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('#back').addEventListener('click', () => {
  offset -= width;
  if (offset < 0) {
    offset = width * 5 - width;
  }
  sliderLine.style.left = -offset + 'px';
});
