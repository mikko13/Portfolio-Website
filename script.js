document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hamburger input');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('change', () => {
        navLinks.classList.toggle('nav-active');
    });
});
