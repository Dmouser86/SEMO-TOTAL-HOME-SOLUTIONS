/* =========================
   SEMO Total Home Solutions
   Main JS (fast + minimal)
   ========================= */

(function () {
  // --- Mobile nav toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("is-open");
      hamburger.classList.toggle("is-open");
    });

    // Close menu when clicking a link (mobile)
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        hamburger.classList.remove("is-open");
      });
    });

    // Close menu if user taps outside menu (mobile polish)
    document.addEventListener("click", (e) => {
      const clickedInside =
        navMenu.contains(e.target) || hamburger.contains(e.target);
      if (!clickedInside) {
        navMenu.classList.remove("is-open");
        hamburger.classList.remove("is-open");
      }
    });
  }

  // --- Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
