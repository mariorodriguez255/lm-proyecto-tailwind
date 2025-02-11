document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const menu = document.getElementById('mobile-menu');
    const menuIcons = menuButton.querySelectorAll('svg');
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.add('hidden');
    menuIcons[0].classList.remove('hidden');
    menuIcons[1].classList.add('hidden');

    menuButton.addEventListener('click', function () {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

        menuButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');

        menuIcons.forEach(icon => icon.classList.toggle('hidden'));
    });
});
const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll("#carousel > div");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    let index = 0;

    function showSlide(i) {
        index = (i + slides.length) % slides.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => showSlide(index + 1));
    prev.addEventListener("click", () => showSlide(index - 1));

    // Auto Slide
    setInterval(() => showSlide(index + 1), 8000);