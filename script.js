document.addEventListener("DOMContentLoaded", function () {
  // Get references to the menu icon and the navigation menu
  var menuIcon = document.getElementById("menu-icon");
  var navbar = document.querySelector(".navbar");

  // Add click event listener to the menu icon
  menuIcon.addEventListener("click", function () {
    // Toggle the "active" class on the navigation menu to show/hide it
    navbar.classList.toggle("active");
  });
});
