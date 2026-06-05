// ===============================
// GREENSCAPE AUTH JS
// Login + Signup Features
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // DARK MODE TOGGLE
    // =========================
    const themeToggle = document.getElementById("themeToggle");

    themeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });


    // =========================
    // RTL / LTR TOGGLE
    // =========================
    const rtlToggle = document.getElementById("rtlToggle");

    rtlToggle?.addEventListener("click", () => {
        const html = document.documentElement;

        if (html.getAttribute("dir") === "ltr") {
            html.setAttribute("dir", "rtl");
        } else {
            html.setAttribute("dir", "ltr");
        }
    });


    // =========================
    // SHOW / HIDE PASSWORD
    // =========================
    const toggleIcons = document.querySelectorAll(".toggle-password");

    toggleIcons.forEach(icon => {
        icon.addEventListener("click", () => {

            const input = icon.parentElement.querySelector("input");

            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }

        });
    });


    // =========================
    // SIGNUP PASSWORD MATCH CHECK
    // =========================
    const signupForm = document.querySelector("form");

    if (signupForm && document.getElementById("confirmPassword")) {

        signupForm.addEventListener("submit", (e) => {

            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");

            if (confirmPassword && password.value !== confirmPassword.value) {
                e.preventDefault();
                alert("❌ Passwords do not match!");
                return;
            }

            alert("✅ Account created successfully!");
        });

    }


    // =========================
    // LOGIN FORM HANDLING
    // =========================
    if (signupForm && !document.getElementById("confirmPassword")) {

        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = signupForm.querySelector('input[type="email"]');
            const password = signupForm.querySelector('input[type="password"]');

            if (!email.value || !password.value) {
                alert("⚠️ Please fill all fields");
                return;
            }

            alert("✅ Login successful!");
        });
    }

});