const backArrow = document.querySelector(".back-arrow");
const nextArrow = document.querySelector(".next-arrow");
const slideShowDiv = document.querySelector(".slideshow");
const heroPrimary = document.querySelector(".hero-primary");
const heroSecondary = document.querySelector(".hero-secondary");

let slideIndex = 1;

let imgURL = "../images/hero-2.jpeg";

nextArrow.addEventListener("click", () => {
  slideShowDiv.style.backgroundImage = 'url("../images/hero-2.jpeg")';
});
