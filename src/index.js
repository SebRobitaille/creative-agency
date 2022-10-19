// Nav bar
const navLinks = document.querySelectorAll(".nav-link")

console.log("test begin")

const navToggle = document.getElementById("nav-toggle")
const nav = document.querySelector(".primary-nav")

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
})

console.log("test end")
