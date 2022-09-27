const arrowBtns = document.querySelectorAll('.question__img-box');
const content = document.querySelector('.acc-content');

arrowBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    content.classList.toggle('acc-content--active');
  });
});
