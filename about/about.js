document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       STAT COUNTER ANIMATION
    ========================= */

    const counters = document.querySelectorAll(".stat h2");

    const runCounter = (counter) => {

        const text = counter.innerText;
        const target = parseInt(text.replace(/\D/g, ""));

        let current = 0;
        const increment = Math.ceil(target / 100);

        const update = () => {

            current += increment;

            if (current >= target) {
                counter.innerText = text;
                return;
            }

            if (text.includes("+")) {
                counter.innerText = current + "+";
            } else {
                counter.innerText = current;
            }

            requestAnimationFrame(update);
        };

        update();
    };

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                runCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".card, .stat, .section h2, .section p, .why-card, .process-card"
    );

    revealElements.forEach(el => {
        el.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* =========================
       HERO PARALLAX
    ========================= */

    const hero = document.querySelector(".about-hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const scroll = window.pageYOffset;

        hero.style.backgroundPositionY = `${scroll * 0.4}px`;

    });

});