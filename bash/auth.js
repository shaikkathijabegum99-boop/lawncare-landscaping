/* =========================
   PASSWORD TOGGLE
========================= */
function togglePassword(id, el) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    el.textContent = "🙈";
  } else {
    input.type = "password";
    el.textContent = "👁";
  }
}

/* =========================
   DARK + RTL TOGGLE (AUTH ONLY)
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeToggle");
  const rtlBtn = document.getElementById("rtlToggle");


  if (localStorage.getItem("auth-theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

  const savedDir = localStorage.getItem("auth-dir");
  if (savedDir) {
    document.documentElement.setAttribute("dir", savedDir);
  }


  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("auth-theme", isDark ? "dark" : "light");

    themeBtn.textContent = isDark ? "☀️" : "🌙";
  });


  rtlBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("dir") || "ltr";
    const newDir = current === "rtl" ? "ltr" : "rtl";

    document.documentElement.setAttribute("dir", newDir);
    localStorage.setItem("auth-dir", newDir);
  });

});