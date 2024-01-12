document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const ratingDiv = button.nextElementSibling;

    ratingDiv.style.display = ratingDiv.style.display === 'none' ? 'block' : 'none';

    button.classList.toggle('active');
  });
});
// Функция для переключения отображения section
function toggleSection() {
var x = document.querySelector("section");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}