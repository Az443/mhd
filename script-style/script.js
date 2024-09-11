// Logo text animation
const logoText = document.getElementById("logo-text");
const text = logoText.textContent;
logoText.textContent = "";
for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.textContent = text[i];
  span.style.opacity = "0";
  logoText.appendChild(span);
}
gsap.to("#logo-text span", {
  opacity: 1,
  stagger: 0.1,
  duration: 0.5,
  ease: "power2.inOut",
});
// تعريف المتغير sections
const sections = document.querySelectorAll("section");

// Smooth scrolling and active link update
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
// Section transition animation
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section);
});

// Minified and optimized JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      }
    });
  });

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Close mobile menu if open
      mainNav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    });
  });

  // Active link update on scroll
  function updateActiveLink() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust offset as needed
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Header background change on scroll
  function updateHeaderBackground() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // Event listeners
  window.addEventListener("scroll", () => {
    updateActiveLink();
    updateHeaderBackground();
  });

  // Initial call to set correct active link and header background
  updateActiveLink();
  updateHeaderBackground();
});

// تعريف المتغير portfolioItems
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Hover animation (keep your existing code)
portfolioItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item.querySelector(".image-frame"), {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item.querySelector(".image-frame"), {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Other event listeners and DOM manipulations...
