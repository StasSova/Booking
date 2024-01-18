let currentSlide = 0;
let isSliderEnabled = false;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = document.querySelector('.slider .sm-hotel-card').offsetWidth;
  const newTransformValue = -index * slideWidth;
  slider.style.transform = `translateX(${newTransformValue}px)`;
  currentSlide = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.slider .sm-hotel-card').length;

  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
  console.log(currentSlide)
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.slider .sm-hotel-card').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function handleResize() {
  const isMobile = window.matchMedia('(max-width: 950px)').matches;

  if (isMobile && !isSliderEnabled) {
    enableSlider();
  } else if (!isMobile && isSliderEnabled) {
    disableSlider();
  }
}

function enableSlider() {
  document.querySelector('.slider-container').style.display = 'block';
  document.querySelector('.slider').style.transition = 'transform 2s ease-in-out';
  setInterval(nextSlide,2000);
  isSliderEnabled = true;
}

function disableSlider() {
  document.querySelector('.slider-container').style.display = 'none';
  document.querySelector('.slider').style.transition = 'none';
  clearInterval();
  isSliderEnabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
  handleResize(); // Вызовите при загрузке страницы для инициализации
  window.addEventListener('resize', handleResize); // Обработчик изменения размера окна браузера
});



