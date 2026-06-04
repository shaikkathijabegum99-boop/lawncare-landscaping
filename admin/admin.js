



const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebarClose = document.getElementById("sidebarClose");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
  });
}

if (sidebarClose) {
  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}



document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 991 &&
    sidebar &&
    !sidebar.contains(e.target) &&
    menuToggle &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});





const darkToggle = document.getElementById("darkToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (darkToggle) {
    darkToggle.innerHTML =
      theme === "dark"
        ? '<i class="fas fa-sun"></i><span>Light Mode</span>'
        : '<i class="fas fa-moon"></i><span>Dark Mode</span>';
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}





const rtlToggle = document.getElementById("rtlToggle");

function applyDirection(direction) {
  document.documentElement.setAttribute("dir", direction);

  if (rtlToggle) {
    rtlToggle.innerHTML =
      direction === "rtl"
        ? '<i class="fas fa-left-right"></i><span>LTR</span>'
        : '<i class="fas fa-right-left"></i><span>RTL</span>';
  }
}

const savedDirection =
  localStorage.getItem("direction") || "ltr";

applyDirection(savedDirection);

if (rtlToggle) {
  rtlToggle.addEventListener("click", () => {
    const currentDirection =
      document.documentElement.getAttribute("dir");

    const newDirection =
      currentDirection === "rtl" ? "ltr" : "rtl";

    applyDirection(newDirection);
    localStorage.setItem("direction", newDirection);
  });
}





const navLinks = document.querySelectorAll(".sidebar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) =>
      item.classList.remove("active")
    );

    link.classList.add("active");
  });
});





const counters = document.querySelectorAll(
  ".metric-card h3, .stat-card h3"
);

counters.forEach((counter) => {
  const text = counter.innerText;

  const value = parseInt(
    text.replace(/[^0-9]/g, "")
  );

  if (!value) return;

  let current = 0;
  const speed = Math.max(10, value / 80);

  const updateCounter = () => {
    current += speed;

    if (current < value) {
      counter.innerText = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = text;
    }
  };

  updateCounter();
});





const notificationBtn = document.querySelector(
  ".topbar-btn .fa-bell"
);

if (notificationBtn) {
  const badge = document.createElement("span");

  badge.className = "notification-badge";
  badge.textContent = "4";

  notificationBtn.parentElement.style.position =
    "relative";

  notificationBtn.parentElement.appendChild(badge);
}





const dateContainer =
  document.getElementById("currentDate");

if (dateContainer) {
  const today = new Date();

  dateContainer.textContent =
    today.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
}





const clock = document.getElementById("liveClock");

function updateClock() {
  if (!clock) return;

  const now = new Date();

  clock.textContent =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();





window.addEventListener("load", () => {
  const progressBars =
    document.querySelectorAll(
      ".progress-bar span"
    );

  progressBars.forEach((bar) => {
    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});