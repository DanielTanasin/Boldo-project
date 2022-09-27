const buttonLeft = document.querySelector('.left-arrow');
const buttonRight = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
const sliderCards = document.querySelectorAll('.slider__cards');
let counter = 0;

slider.style.width = sliderCards.length * 100 + '%';

buttonRight.addEventListener('click', () => {
  if (counter < sliderCards.length - 1) {
    slider.style.transform += `translateX(-${100 / sliderCards.length}%)`;
    counter++;
  } else {
    return;
  }
});

buttonLeft.addEventListener('click', () => {
  if (counter >= 1) {
    slider.style.transform += `translateX(${100 / sliderCards.length}%)`;
    counter--;
  } else {
    return;
  }
});
