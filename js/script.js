// Get all the links in the navbar
const navLinks = document.querySelectorAll("nav ul li a");

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add the active class to the clicked link
    this.classList.add("active");
  });
});
