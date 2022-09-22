const backArrow = document.querySelector(".back-arrow");
const nextArrow = document.querySelector(".next-arrow");
const slideShowDiv = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");

const slide1 = document.querySelector("#slide-1");
const slide2 = document.querySelector("#slide-2");
const slide3 = document.querySelector("#slide-3");

const heroPrimary = document.querySelector(".hero-primary");
const heroSecondary = document.querySelector(".hero-secondary");

let slideIndex = 1;

const nextSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  if (slideIndex < 3) {
    slideIndex += 1;
  } else if (slideIndex == 3) {
    slideIndex = 1;
  }
  console.log(slideIndex);

  if (slideIndex == 1) {
    slide1.classList.add("active");
  } else if (slideIndex == 2) {
    slide2.classList.add("active");
  } else if (slideIndex == 3) {
    slide3.classList.add("active");
  }
};

// nextArrow.addEventListener("click", nextSlide());
