// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNavbar = header.offsetTop;

  if (window.scrollY > fixedNavbar) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// AOS
AOS.init({
  once: true,
});

// GSAP
gsap.registerPlugin(TextPlugin);
gsap.to(".text-gsap", {
  duration: 5,
  delay: 1,
  text: "Muhammad Chairul Hamsy",
});
