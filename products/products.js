const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');

const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

// add click event listeners to all the open modal buttons
cards.forEach(card => {
  card.querySelector('.open-modal').addEventListener('click', () => {
    const cardId = card.getAttribute('data-card-id');
    const cardTitle = card.querySelector('h3').textContent;
    const cardDescription = card.querySelector('p').textContent;
    modalTitle.textContent = cardTitle;
    modalContent.textContent = cardDescription;
    modal.style.display = 'flex';
  });
});

// close modal button
document.querySelector('.close-modal').addEventListener('click', () => {
  modal.style.display = 'none';
});
