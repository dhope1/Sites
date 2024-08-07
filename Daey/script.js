// JavaScript for background slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.background-slide');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 9000); // Change image every 5 seconds
});
