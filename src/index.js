const prevArrow = document.querySelector(".back-arrow");
const nextArrow = document.querySelector(".next-arrow");
const slideShowDiv = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");

const slide1 = document.querySelector("#slide-1");
const slide2 = document.querySelector("#slide-2");
const slide3 = document.querySelector("#slide-3");

const heroPrimary = document.querySelector(".hero-primary");
const heroSecondary = document.querySelector(".hero-secondary");

// Slide transitions
let slideIndex = 0;

const nextSlide = () => {
  slideIndex += 1;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
};

const prevSlide = () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
};

nextArrow.addEventListener("click", () => {
  nextSlide();
});

prevArrow.addEventListener("click", () => {
  prevSlide();
});
