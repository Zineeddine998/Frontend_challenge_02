let toggler = document.querySelector('.toggler');
let togglerClose = document.querySelector('.toggler-close');
let logo = document.querySelector('.logo');
let navM = document.querySelector('.nav-m');
let navMLink = document.querySelector('.nav-m .link-m');

function openNavM() {
  navM.style.display = 'flex';
  navM.style.animationName = 'open';
  navMLink.animationName = 'open';
  toggler.style.display = 'none';
  logo.style.display = 'none';
}

function closeNavM() {
  navM.style.animationName = 'close';
  navM.style.display = 'none';
  toggler.style.display = 'block';
  logo.style.display = 'block';
}

toggler.addEventListener('click', openNavM);
togglerClose.addEventListener('click', closeNavM);