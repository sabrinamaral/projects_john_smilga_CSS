// xxxxxxx SET DATE/YEAR xxxxxxx //
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// xxxxxxx NAV TOGGLE xxxxxxx //
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

// xxxxxxx SMOOTH SCROLL xxxxxxx //
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 62;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
