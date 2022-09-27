const toggleMenu = document.querySelector('.nav');
const ham = document.querySelector('.hamburger');

const active = function () {
  toggleMenu.classList.toggle('nav--active');
  ham.classList.toggle('active');
};

ham.addEventListener('click', active);
