document.querySelectorAll('.navbar .menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const burger = document.querySelector('.burger');
const overlay = document.querySelector('.mobile-menu-overlay');
const closeMenu = document.querySelector('.close-menu');

burger.addEventListener('click', () => {
    overlay.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    overlay.classList.remove('active');
});

