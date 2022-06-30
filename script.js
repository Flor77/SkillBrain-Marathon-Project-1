const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveSlides();
    slide.classList.add('active');
  })
}

function clearActiveSlides() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  })
}