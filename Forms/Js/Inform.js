document.addEventListener('DOMContentLoaded', function() {
  let check1 = document.querySelector('.check1');
  let check2 = document.querySelector('.check2');
  check1.addEventListener('focus', function() {
    check1.src = '../img/actyes.png';
  });
  check2.addEventListener('focus', function() {
    check2.src = '../img/actno.png';
  });
  check1.addEventListener('blur', function() {
    check1.src = '../img/yes.png';
  });
  check2.addEventListener('blur', function() {
    check2.src = '../img/no.png';
  });
}); //Функция переключения изображений