/* ==========================================
   GLOBAL INITIAL LOG
========================================== */

console.log("🌿 Global JS Loaded - Lawncare System Ready");

/* ==========================================
   SMOOTH SCROLL (ANCHOR LINKS)
========================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

/* ==========================================
   SCROLL TO TOP BUTTON (OPTIONAL)
========================================== */

function createScrollTopButton() {
  const btn = document.createElement("button");
  btn.innerHTML = "↑";
  btn.className = "scroll-top-btn";

  Object.assign(btn.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    background: "var(--primary)",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    display: "none",
    zIndex: "9999",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
  });

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "flex";
      btn.style.alignItems = "center";
      btn.style.justifyContent = "center";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================
   LAZY IMAGE LOADING (PERFORMANCE)
========================================== */

function initLazyImages() {
  const images = document.querySelectorAll("img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");

        if (src) {
          img.src = src;
          img.removeAttribute("data-src");
        }

        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => observer.observe(img));
}

/* ==========================================
   SIMPLE REVEAL ON SCROLL
========================================== */

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================
   FORM AUTO VALIDATION (BASIC)
========================================== */

function initFormValidation() {
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input[required], textarea[required]");

      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("⚠️ Please fill all required fields");
      }
    });
  });
}

/* ==========================================
   FOOTER YEAR AUTO UPDATE
========================================== */

function updateFooterYear() {
  const year = new Date().getFullYear();

  document.querySelectorAll(".footer-year").forEach(el => {
    el.textContent = year;
  });
}

/* ==========================================
   INIT GLOBAL FEATURES
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  initSmoothScroll();
  createScrollTopButton();
  initLazyImages();
  initScrollReveal();
  initFormValidation();
  updateFooterYear();

});
