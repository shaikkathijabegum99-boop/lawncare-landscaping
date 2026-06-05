/* ==================================================
   BLOG DETAIL SCRIPT (Premium UX Enhancements)
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });

    /* ==================================================
       READING PROGRESS BAR
    ================================================== */

    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "3px";
    progressBar.style.width = "0%";
    progressBar.style.background = "var(--primary)";
    progressBar.style.zIndex = "9999";
    progressBar.style.transition = "width 0.25s ease";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;

        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + "%";
    });

    /* ==================================================
       BACK TO TOP BUTTON
    ================================================== */

    const backToTop = document.createElement("button");
    backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "30px";
    backToTop.style.right = "30px";
    backToTop.style.width = "45px";
    backToTop.style.height = "45px";
    backToTop.style.borderRadius = "50%";
    backToTop.style.border = "none";
    backToTop.style.background = "var(--primary)";
    backToTop.style.color = "#fff";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "9999";
    backToTop.style.boxShadow = "var(--shadow-hover)";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* ==================================================
       ACTIVE SIDEBAR LINK (HIGHLIGHT CURRENT PAGE)
    ================================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".recent-post a").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.style.color = "var(--primary)";
            link.style.fontWeight = "700";
        }
    });

});