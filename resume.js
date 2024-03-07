document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".container-fluid");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let currentSectionId = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href").substring(1); // Remove the '#' from href
      if (href === currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function handleScroll() {
    requestAnimationFrame(setActiveLink);
  }

  window.addEventListener("scroll", handleScroll);
});
