const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');
const navElements = document.querySelectorAll('.header__link');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
});

const closeMenu = function () {
  if (navMain.classList.contains('header__nav--opened')) {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
  }
}

navElements.forEach((link) => {
  link.addEventListener('click', function() {
    closeMenu();
  });
});
