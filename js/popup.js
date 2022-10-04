const link = document.querySelectorAll('.card__link');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const btnClosePop = document.querySelector('.close-pop');

const openState = function () {
  overlay.classList.remove('hidden');
  popup.classList.remove('hidden');
};

const closeState = function () {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
};

link.forEach(link => {
  link.addEventListener('click', openState);
});
btnClosePop.addEventListener('click', closeState);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    overlay.classList.add('hidden');
    popup.classList.add('hidden');
  }
});
