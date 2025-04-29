  
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const openModalBtn2 = document.getElementById('openModal2');
  const closeModalBtn = document.querySelector('.close-btn');

  function openModal() {
    modal.style.display = 'block';
    document.body.classList.add('body-lock'); // Блокируем скролл
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('body-lock'); // Разрешаем скролл
  }

  if (openModalBtn) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (openModalBtn2) {
    openModalBtn2.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});


