// Add this to your existing script.js file
function setupCertificateSlider() {
  const container = document.querySelector(".certificate-container");
  const certificates = document.querySelectorAll(".certificate");
  let currentIndex = 0;

  function slide() {
    currentIndex = (currentIndex + 1) % certificates.length;
    container.style.transform = `translateX(-${currentIndex * 33.333}%)`;
  }

  setInterval(slide, 3000); // Change slide every 3 seconds
}

// Call this function when the DOM is loaded
document.addEventListener("DOMContentLoaded", setupCertificateSlider);

// Portfolio filtering
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
