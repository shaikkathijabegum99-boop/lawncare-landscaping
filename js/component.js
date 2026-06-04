/* ==========================================
   COMPONENT LOADER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadNavbar();
    loadFooter();

    initializeCounters();
    initializeBackToTop();

});

/* ==========================================
   LOAD NAVBAR
========================================== */

function loadNavbar() {

    const navbarContainer =
        document.getElementById("navbar");

    if (!navbarContainer) return;

    fetch("../components/navbar.html")

        .then(response => {

            if (!response.ok) {
                throw new Error("Navbar not found");
            }

            return response.text();

        })

        .then(data => {

            navbarContainer.innerHTML = data;

            initializeNavbar();

        })

        .catch(error => {

            console.error(
                "Navbar Loading Error:",
                error
            );

        });

}

/* ==========================================
   LOAD FOOTER
========================================== */

function loadFooter() {

    const footerContainer =
        document.getElementById("footer");

    if (!footerContainer) return;

    fetch("../components/footer.html")

        .then(response => {

            if (!response.ok) {
                throw new Error("Footer not found");
            }

            return response.text();

        })

        .then(data => {

            footerContainer.innerHTML = data;

        })

        .catch(error => {

            console.error(
                "Footer Loading Error:",
                error
            );

        });

}

/* ==========================================
   INITIALIZE NAVBAR
========================================== */
function initializeNavbar() {

    initializeMobileMenu();
    initializeTheme();
    initializeRTL();
    initializeActiveLinks();

    initializeStickyHeader();

}
/* ==========================================
   MOBILE MENU
========================================== */

function initializeMobileMenu() {

    const hamburger =
        document.getElementById("hamburger");

    const mobileMenu =
        document.getElementById("mobile-menu");

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

    });

    document
        .querySelectorAll(".mobile-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");
                mobileMenu.classList.remove("active");

            });

        });

}

/* ==========================================
   DARK MODE
========================================== */

function initializeTheme() {

    const themeToggle =
        document.getElementById("theme-toggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }

    updateThemeIcon();

    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark")
                ? "dark"
                : "light"
        );

        updateThemeIcon();

    });

}

/* ==========================================
   UPDATE THEME ICON
========================================== */

function updateThemeIcon() {

    const icon =
        document.querySelector("#theme-toggle i");

    if (!icon) return;

    if (
        document.body.classList.contains("dark")
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}

/* ==========================================
   RTL SUPPORT
========================================== */

function initializeRTL() {

    const rtlToggle =
        document.getElementById("rtl-toggle");

    const savedDirection =
        localStorage.getItem("direction");

    if (savedDirection) {

        document.documentElement.dir =
            savedDirection;

    }

    if (!rtlToggle) return;

    rtlToggle.addEventListener("click", () => {

        const newDirection =
            document.documentElement.dir === "rtl"
                ? "ltr"
                : "rtl";

        document.documentElement.dir =
            newDirection;

        localStorage.setItem(
            "direction",
            newDirection
        );

    });

}

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

function initializeActiveLinks() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    document
        .querySelectorAll(
            ".nav-links a, .mobile-links a"
        )
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) return;

            const page =
                href.split("/").pop();

            if (page === currentPage) {

                link.classList.add(
                    "active-link"
                );

            }

        });

}

/* ==========================================
   STICKY HEADER
========================================== */

function initializeStickyHeader() {

    const header =
        document.querySelector(".site-header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add(
                "sticky-active"
            );

        } else {

            header.classList.remove(
                "sticky-active"
            );

        }

    });

}

/* ==========================================
   DROPDOWN MENU
========================================== */

document.addEventListener("click", e => {

    const dropdown =
        e.target.closest(".has-dropdown");

    document
        .querySelectorAll(".has-dropdown")
        .forEach(item => {

            if (item !== dropdown) {

                item.classList.remove(
                    "dropdown-open"
                );

            }

        });

    if (dropdown) {

        dropdown.classList.toggle(
            "dropdown-open"
        );

    }

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

function initializeCounters() {

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );

    if (!counters.length) return;

    const runCounter = () => {

        counters.forEach(counter => {

            const target =
                Number(
                    counter.dataset.count
                );

            let current = 0;

            const increment =
                target / 100;

            const timer =
                setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent =
                            target;

                        clearInterval(timer);

                    } else {

                        counter.textContent =
                            Math.floor(current);

                    }

                }, 15);

        });

    };

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        runCounter();

                        observer.disconnect();

                    }

                });

            }
        );

    observer.observe(counters[0]);

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

function initializeBackToTop() {

    const backToTop =
        document.getElementById(
            "backToTop"
        );

    if (!backToTop) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================================
   CLOSE MOBILE MENU ON RESIZE
========================================== */

window.addEventListener("resize", () => {

    const mobileMenu =
        document.getElementById(
            "mobile-menu"
        );

    const hamburger =
        document.getElementById(
            "hamburger"
        );

    if (
        window.innerWidth > 1024 &&
        mobileMenu
    ) {

        mobileMenu.classList.remove(
            "active"
        );

        hamburger?.classList.remove(
            "active"
        );

    }

});

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});