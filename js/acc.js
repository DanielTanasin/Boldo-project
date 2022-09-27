const downArrows = document.querySelectorAll('.down-arrow');
const questions = document.querySelectorAll('.question-box');

downArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('down-arrow--active');
  });
});

questions.forEach(question => {
  question.addEventListener('click', () => {
    const panel = question.nextElementSibling;
    panel.classList.toggle('answer--active');
  });
});
