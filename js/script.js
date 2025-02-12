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



const items = document.querySelectorAll(".carousel-item");
      const thumbnails = document.querySelectorAll(".thumbnail");
      let currentIndex = 0;

      function showSlide(index) {
        items.forEach((item, i) => {
          item.classList.toggle("active", i === index);
          thumbnails[i].classList.toggle("border-gray-700", i === index);
        });
      }

      document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
      });

      document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
      });

      thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", (event) => {
          currentIndex = parseInt(event.currentTarget.dataset.index);
          showSlide(currentIndex);
        });
      });

      showSlide(currentIndex);