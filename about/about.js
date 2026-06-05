/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

const runCounter = () => {

    counters.forEach(counter => {

        const target =
            parseInt(counter.innerText.replace(/\D/g, ""));

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText =
                    Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText =
                    target + "+";
            }
        };

        update();
    });
};

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".card, .team-card, .feature-list, .section-title"
    );

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("show");
        }
    });
};

window.addEventListener(
    "scroll",
    revealOnScroll
);

/* ==========================================
   RUN ON LOAD
========================================== */

window.addEventListener("load", () => {

    runCounter();

    revealOnScroll();
});