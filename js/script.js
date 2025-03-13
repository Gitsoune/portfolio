// Get all the links in the navbar
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

// Function to show the selected section and hide the others
function showSection(sectionId) {
  sections.forEach((section) => {
    if (section.id === sectionId) {
      setTimeout(() => {
        section.style.display = "block";
        setTimeout(() => {
          section.classList.add("active");
        }, 10); // Delay to ensure display change is applied before opacity transition
      }, 300); // Delay to match the opacity transition duration
    } else {
      section.classList.remove("active");
      setTimeout(() => {
        section.style.display = "none";
      }, 300); // Delay to match the opacity transition duration
    }
  });
}

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add the active class to the clicked link
    this.classList.add("active");

    // Show the corresponding section
    const sectionId = this.getAttribute("href").substring(1);
    showSection(sectionId);
  });
});

// Show the default section (Bio) on page load
showSection("bio");
