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
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slides .image-container");
    const dots = document.querySelectorAll(".dots .dot");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    // Function to update the active slide
    function updateSlide(index) {
        // Hide all slides and remove "active" class from dots
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
            dots[i].classList.toggle("active", i === index);
        });
    }

    // Show the previous slide
    function showPrevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlide(currentIndex);
    }

    // Show the next slide
    function showNextSlide() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlide(currentIndex);
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Event listeners for dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    // Initialize the slider
    updateSlide(currentIndex);
});

