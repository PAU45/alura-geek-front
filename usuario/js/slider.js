const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

if (nextButton && prevButton && slides.length > 0) {
    nextButton.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    prevButton.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    slides[currentSlide].classList.add('active');
}