/* ==========================================
   COMPONENT LOADER
========================================== */

async function loadComponent(id, path) {
  const el = document.getElementById(id);

  if (!el) return;

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    el.innerHTML = await response.text();

  } catch (error) {
    console.error("Component Load Error:", error);
  }
}

/* ==========================================
   GET ROOT PATH
========================================== */

function getRootPath() {

  const path = window.location.pathname;

  const isHome =
    path.endsWith("/") ||
    path.endsWith("/index.html") ||
    path.split("/").pop() === "index.html";

  return isHome ? "./" : "../";
}

/* ==========================================
   MOBILE MENU
========================================== */

function initMobileMenu() {

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

/* ==========================================
   THEME
========================================== */

function initTheme() {

  const themeToggle = document.getElementById("theme-toggle");
  const icon = themeToggle?.querySelector("i");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateIcon(true);
  }

  themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
      document.body.classList.contains("dark-mode");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

    updateIcon(isDark);
  });

  function updateIcon(isDark) {

    if (!icon) return;

    icon.classList.remove("fa-sun", "fa-moon");

    icon.classList.add(
      isDark ? "fa-sun" : "fa-moon"
    );
  }
}

/* ==========================================
   RTL
========================================== */

function initRTL() {

  const rtlToggle = document.getElementById("rtl-toggle");

  const savedDir =
    localStorage.getItem("dir") || "ltr";

  document.documentElement.setAttribute(
    "dir",
    savedDir
  );

  rtlToggle?.addEventListener("click", () => {

    const current =
      document.documentElement.getAttribute("dir");

    const next =
      current === "ltr" ? "rtl" : "ltr";

    document.documentElement.setAttribute(
      "dir",
      next
    );

    localStorage.setItem("dir", next);
  });
}

/* ==========================================
   ACTIVE LINKS
========================================== */

function setActiveLinks() {

  const currentPage =
    window.location.pathname.split("/").pop();

  document
    .querySelectorAll(".nav-links a, .mobile-links a")
    .forEach(link => {

      const href =
        link.getAttribute("href")?.split("/").pop();

      if (href === currentPage) {
        link.classList.add("active");
      }
    });
}

/* ==========================================
   STICKY HEADER
========================================== */

function initStickyHeader() {

  const header =
    document.querySelector(".site-header");

  if (!header) return;

  window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });
}

/* ==========================================
   DROPDOWNS
========================================== */

function initDropdowns() {

  document
    .querySelectorAll(".has-dropdown")
    .forEach(drop => {

      drop.addEventListener("click", e => {

        if (window.innerWidth <= 1024) {

          e.preventDefault();

          drop.classList.toggle("open");
        }
      });
    });
}

/* ==========================================
   INIT
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

  const root = getRootPath();

  await loadComponent(
    "navbar",
    root + "components/navbar.html"
  );

  await loadComponent(
    "footer",
    root + "components/footer.html"
  );

  initTheme();
  initRTL();
  initMobileMenu();
  setActiveLinks();
  initStickyHeader();
  initDropdowns();

});