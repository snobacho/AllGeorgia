const modal = document.querySelector('.modal');
const modalBtns = document.querySelectorAll('.tour-order-btn');
const closeBtn = document.querySelector('.close-modal-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});