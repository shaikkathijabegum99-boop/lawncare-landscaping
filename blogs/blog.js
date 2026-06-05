/* ==========================================
   BLOG PAGE SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNewsletterForm();
    initScrollAnimations();

});

/* ==========================================
   NEWSLETTER FORM
========================================== */

function initNewsletterForm() {

    const form = document.querySelector(".newsletter-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            form.querySelector("input[type='email']").value;

        if (!email) return;

        alert("Thank you for subscribing!");

        form.reset();

    });

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

function initScrollAnimations() {

    const elements = document.querySelectorAll(
        ".blog-card, .featured-post, .newsletter-section"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(el => {
        el.classList.add("fade-up");
        observer.observe(el);
    });

}