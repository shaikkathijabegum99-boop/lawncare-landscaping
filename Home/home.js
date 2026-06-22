document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", () => {

            const answer = button.nextElementSibling;

            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) {
                    item.style.display = "none";
                }
            });

            answer.style.display =
                answer.style.display === "block"
                    ? "none"
                    : "block";
        });
    });


    /* ==========================================
       SCROLL ANIMATIONS
    ========================================== */

    const animatedElements = document.querySelectorAll(`
        .trust-grid > div,
        .process-card,
        .gallery-item,
        .cert-card,
        .grid-3 .card,
        .comparison-card,
        .team-card,
        .testimonial-card,
        .blog-card,
        .check-list div
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => {

        element.classList.add("fade-up");
        observer.observe(element);

    });


    /* ==========================================
       HERO BUTTON SMOOTH SCROLL
    ========================================== */

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


    /* ==========================================
       GALLERY IMAGE HOVER EFFECT
    ========================================== */

    document.querySelectorAll(".gallery-item").forEach(item => {

        item.addEventListener("mousemove", (e) => {

            const rect = item.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            item.style.setProperty("--x", `${x}px`);
            item.style.setProperty("--y", `${y}px`);
        });

    });


    /* ==========================================
       NEWSLETTER FORM
    ========================================== */

    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const email =
                newsletterForm.querySelector("input").value.trim();

            if (email === "") {

                alert("Please enter your email address.");
                return;
            }

            alert("Thank you for subscribing!");

            newsletterForm.reset();

        });

    }


    /* ==========================================
       HERO COUNTER ANIMATION
    ========================================== */

    const counters = document.querySelectorAll("[data-count]");

    counters.forEach(counter => {

        const target = +counter.dataset.count;

        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if (count < target) {

                count += increment;

                counter.textContent = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;
            }
        };

        observer.observe(counter);

        counter.addEventListener("animationstart", updateCounter);
    });

});