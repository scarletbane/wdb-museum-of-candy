import '../styles/main.scss';

const mainNavbar = document.querySelector('#main-navbar');

let windowScrolled = false;

addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        windowScrolled = false;
    } else {
        windowScrolled = true;
    }

    if (windowScrolled == true) {
        mainNavbar.classList.add('scrolled');
    } else {
        mainNavbar.classList.remove('scrolled');
    }
});
