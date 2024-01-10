document.addEventListener('DOMContentLoaded', function () {
    let signinLink = document.getElementById('signin');
    let backmainLink = document.getElementById('backmain');
    let crossLink = document.getElementById('cross');
    let registrationLink = document.getElementById('register');
    let backmain2Link = document.getElementById('backmain2');
    let cross2Link = document.getElementById('cross2');
    let opregLink = document.getElementById('openreg');
    let cont1Link = document.getElementById('cont1');
    let backmain3Link = document.getElementById('backmain3');
    let cross3Link = document.getElementById('cross3');
    let cont2Link = document.getElementById('cont2');
    let backmain4Link = document.getElementById('backmain4');
    let cross4Link = document.getElementById('cross4');
    let cont3Link = document.getElementById('cont3');
    let backmain5Link = document.getElementById('backmain5');
    let cross5Link = document.getElementById('cross5');

    signinLink.addEventListener('click', function (event) {
      document.body.style.overflow = 'hidden';
      backmainLink.style.animation = '.25s appear linear forwards';
    });
    crossLink.addEventListener('click', function(event){
      document.body.style.overflow = 'visible';
      backmainLink.style.animation = '.25s disappear linear forwards';
    });
    registrationLink.addEventListener('click', function(event){
      document.body.style.overflow = 'hidden';
      backmain2Link.style.animation = '.25s appear linear forwards';
    });
    cross2Link.addEventListener('click', function(event){
      document.body.style.overflow = 'visible';
      backmain2Link.style.animation = '.25s disappear linear forwards';
    });
    opregLink.addEventListener('click', function(event){
      backmainLink.style.animation = '.25s disappear linear forwards';
      backmain2Link.style.animation = '.25s appear linear forwards';
    });
    cont1Link.addEventListener('click', function(event){
      backmain2Link.style.animation = '.25s disappear linear forwards';
      backmain3Link.style.animation = '.25s appear linear forwards';
    });
    cross3Link.addEventListener('click', function(event){
      document.body.style.overflow = 'visible';
      backmain3Link.style.animation = '.25s disappear linear forwards';
    });
    cont2Link.addEventListener('click', function(event){
      backmain3Link.style.animation = '.25s disappear linear forwards';
      backmain4Link.style.animation = '.25s appear linear forwards';
    });
    cross4Link.addEventListener('click', function(event){
      document.body.style.overflow = 'visible';
      backmain4Link.style.animation = '.25s disappear linear forwards';
    });
    cont3Link.addEventListener('click', function(event){
      backmain4Link.style.animation = '.25s disappear linear forwards';
      backmain5Link.style.animation = '.25s appear linear forwards';
    });
    cross5Link.addEventListener('click', function(event){
      document.body.style.overflow = 'visible';
      backmain5Link.style.animation = '.25s disappear linear forwards';
    });
});