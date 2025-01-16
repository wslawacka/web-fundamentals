const toggleDarkModeButton = document.querySelector(".toggle-dark-mode");
const body = document.body;

toggleDarkModeButton.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const sliderContainer = document.querySelector(".slider-container");
  const offset = -currentSlide * 100;
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

let interval = setInterval(() => {
  moveSlide(1);
}, 3000);

function moveFunction(direction) {
  moveSlide(direction);
  clearInterval(interval);
  interval = setInterval(() => {
    moveSlide(1);
  }, 3000);
}
