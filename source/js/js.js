var mainNav = document.querySelector('.main-nav');
var toggle = document.querySelector('.page-header__toggle');
var togglePic = document.querySelector('.page-header__toggle-image');

toggle.classList.remove('page-header__toggle--nojs');
mainNav.classList.add('visually-hidden');

toggle.addEventListener('click', function() {
    if (mainNav.classList.contains('visually-hidden')) {
      mainNav.classList.remove('visually-hidden');
      togglePic.src = 'img/icon-close.svg';
    } else {
      mainNav.classList.add('visually-hidden');
      togglePic.src = 'img/icon-mobile-menu.svg';
    }
});

if (window.matchMedia('(min-width: 768px)').matches) {
  if (mainNav.classList.contains('visually-hidden')) {
    mainNav.classList.remove('visually-hidden');
  }
}

window.onresize = function(event) {
  if (window.matchMedia('(min-width: 768px)').matches) {
    if (mainNav.classList.contains('visually-hidden')) {
      mainNav.classList.remove('visually-hidden');
    }
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    if (!mainNav.classList.contains('visually-hidden')) {
      mainNav.classList.add('visually-hidden');
    }
  }
}
