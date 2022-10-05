// Nav bar

console.log("test begin");

const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

console.log("test end");
