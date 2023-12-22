document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const ratingDiv = button.nextElementSibling;
  
      ratingDiv.style.display = ratingDiv.style.display === 'none' ? 'block' : 'none';
  
      button.classList.toggle('active');
    });
  });
  