document.addEventListener("DOMContentLoaded", function () {
  const fadeUpElements = document.querySelectorAll(".fade-up");
  const fadeRightElements = document.querySelectorAll(".fade-right");
  const fadeLeftElements = document.querySelectorAll(".fade-left");

  function checkFadeUp() {
    fadeUpElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }
  function checkFadeRight() {
    fadeRightElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }
  function checkFadeLeft() {
    fadeLeftElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkFadeUp);
  window.addEventListener("resize", checkFadeUp);
  window.addEventListener("scroll", checkFadeRight);
  window.addEventListener("resize", checkFadeRight);
  window.addEventListener("scroll", checkFadeLeft);
  window.addEventListener("resize", checkFadeLeft);
  checkFadeUp();
});
