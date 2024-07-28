document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hamburger input');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('change', () => {
        if (burger.checked) {
            navLinks.classList.remove('nav-inactive');
            navLinks.classList.add('nav-active');
            navLinks.style.display = 'flex';
        } else {
            navLinks.classList.remove('nav-active');
            navLinks.classList.add('nav-inactive');
        }
    });

    navLinks.addEventListener('animationend', (event) => {
        if (event.animationName === 'slideUp') {
            navLinks.style.display = 'none';
        }
    });
});
