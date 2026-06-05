/* ==================================================
   SERVICE DETAIL PREMIUM INTERACTIONS
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       SCROLL PROGRESS BAR
    =============================== */
    const progress = document.createElement("div");
    progress.className = "progress-bar";
    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        progress.style.width = scrolled + "%";
    });

    /* ===============================
       BACK TO TOP BUTTON
    =============================== */
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.style.display = "block";
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

    /* ===============================
       FADE UP ANIMATION ON SCROLL
    =============================== */
    const elements = document.querySelectorAll(".card, h2, p, .cta");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-up", "show");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add("fade-up");
        observer.observe(el);
    });

    /* ===============================
       SMOOTH SCROLL FOR ANCHORS
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(anchor.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

});