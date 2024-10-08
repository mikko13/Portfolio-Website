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

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hide'); 
    document.body.classList.remove('no-scroll');
}

window.addEventListener('load', () => {
    document.body.classList.add('no-scroll'); 
    setTimeout(hideLoader, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const contactSection = document.getElementById("contact");

    contactButton.addEventListener("click", function() {
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const memoji = document.querySelector('.memoji');
    const memojiBlink = document.querySelector('.memoji-blink');
    const cloud = document.querySelector('.cloud');

    memoji.addEventListener('mouseover', () => {
        cloud.classList.remove('fade-out');
        cloud.classList.add('fade-in');
    });

    memoji.addEventListener('mouseout', () => {
        cloud.classList.remove('fade-in');
        cloud.classList.add('fade-out');
    });

    memojiBlink.addEventListener('mouseover', () => {
        cloud.classList.remove('fade-out');
        cloud.classList.add('fade-in');
    });

    memojiBlink.addEventListener('mouseout', () => {
        cloud.classList.remove('fade-in');
        cloud.classList.add('fade-out');
    });
});