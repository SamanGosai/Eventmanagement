document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown, .dropdown-image');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');

        // Show dropdown on hover
        dropdown.addEventListener('mouseenter', () => {
            menu.style.display = 'block';
        });

        // Hide dropdown when the mouse leaves
        dropdown.addEventListener('mouseleave', () => {
            menu.style.display = 'none';
        });
    });
});
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function updateSlider(index) {
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});
