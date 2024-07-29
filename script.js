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

document.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.querySelector('.scrollup');

    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
