document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.ftr-container .accordion-toggle2').forEach(button => {
      button.addEventListener('click', () => {
          const column = button.closest('.ftr-column');
          if (!column) {
              console.error('Родительский элемент .ftr-column не найден');
              return;
          }

          column.classList.toggle('active');
      });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  initializeSelectMenu("sel-payment");
  initializeSelectMenu("sel-country");
  initializeSelectMenu("sel-preferred-currency");
  initializeSelectMenu("sel-ampthill");
});

function initializeSelectMenu(menuId) {
  const optionMenu = document.getElementById(menuId);
  if (!optionMenu) return;

  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

  options.forEach(option => {
      option.addEventListener("click", () => {
          let selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption;
          optionMenu.classList.remove("active");
      });
  });
}
document.getElementById('monthDayInput').addEventListener('input', function(e) {
    var input = e.target.value;
  
    if (input.length > 5) {
      e.target.value = input.slice(0, 5);
    }
  
    if (input.length === 2 && !input.includes('/')) {
      e.target.value = input + '/';
    }
  
  });
  



 