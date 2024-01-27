let menueIcon = document.querySelector("#menue-icon");
let navbar = document.querySelector(".navbar");

let section = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Your code using the 'offset' variable
    // For example, you might want to check if the current scroll position is within the section's boundaries
    if (top >= offset && top < offset + height) {
      console.log(`Section with ID ${id} is in view.`);
      // Do something with the section in view
    }
  });
};

if (top >= offset && top < offset + height) {
  navLinks.forEach((links) => {
    links.classList.remove("active");
    document
      .querySelector("header nav a[href*=" + id + "]")
      .classList.add(active);
  });
}
const menuIcon = document.getElementById("menu-icon");

menuIcon.onclick = () => {
  console.log("Menu icon clicked");
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
