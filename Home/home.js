document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FAQ ACCORDION
    // =========================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            // close other items
            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            // toggle current
            item.classList.toggle("active");
        });
    });


    // =========================
    // NEWSLETTER FORM
    // =========================
    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector("input");

            const email = emailInput.value.trim();

            if (!email) {
                alert("⚠️ Please enter your email");
                return;
            }

            if (!validateEmail(email)) {
                alert("❌ Please enter a valid email");
                return;
            }

            alert("✅ Subscribed successfully!");

            emailInput.value = "";
        });
    }


    // =========================
    // EMAIL VALIDATION FUNCTION
    // =========================
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


    // =========================
    // SMOOTH SCROLL (optional UX upgrade)
    // =========================
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});