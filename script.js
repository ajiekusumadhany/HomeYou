document.addEventListener("DOMContentLoaded", function () {
  const fadeUpElements = document.querySelectorAll(".fade-up");
  const fadeRightElements = document.querySelectorAll(".fade-right");
  const fadeLeftElements = document.querySelectorAll(".fade-left");

  function checkVisibility(elements) {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }

  function handleScrollAndResize() {
    checkVisibility(fadeUpElements);
    checkVisibility(fadeRightElements);
    checkVisibility(fadeLeftElements);
  }

  window.addEventListener("scroll", handleScrollAndResize);
  window.addEventListener("resize", handleScrollAndResize);

  // Initial check to show elements on load
  handleScrollAndResize();
});
