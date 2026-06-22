

        fetch("../components/navbar.html")
            .then(res => res.text())
            .then(data => {

                document.getElementById("navbar").innerHTML = data;

                const loginBtn = document.getElementById("loginBtn");

                if(loginBtn){
                    loginBtn.addEventListener("click", () => {
                        window.location.href = "../login.html";
                    });
                }

                const mobileLoginBtn = document.getElementById("mobileLoginBtn");

                if(mobileLoginBtn){
                    mobileLoginBtn.addEventListener("click", () => {
                        window.location.href = "../login.html";
                    });
                }

                const links = document.querySelectorAll(".nav-link");

                const currentPage = window.location.pathname.split("/").pop();

                links.forEach(link => {

                    const linkPage = link.getAttribute("href").split("/").pop();

                    if(linkPage === currentPage){
                        link.classList.add("active");
                    }

                });

                initializeNavbar();

            });

        fetch("../components/footer.html")
            .then(res => res.text())
            .then(data => {

                document.getElementById("footer").innerHTML = data;

                const homepageBtn = document.getElementById("homepage-redirect");

                if(homepageBtn){
                    homepageBtn.addEventListener("click", () => {
                        window.location.href = "../index.html";
                    });
                }

            });

        /* Reveal Animation */

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                }

            });

        }, { threshold: 0.2 });

        document.querySelectorAll(".reveal").forEach(el => {
            observer.observe(el);
        });

        /* Contact Form */

        document.getElementById("contactForm")
            .addEventListener("submit", (e) => {

                e.preventDefault();

                alert(
                    "Thank you for contacting GreenScape! Our team will get back to you shortly."
                );

                e.target.reset();

            });

        /* Lucide */

        lucide.createIcons();

        function initializeNavbar(){

            const themeToggle =
                document.getElementById("themeToggle");

            if(themeToggle){

                lucide.createIcons();

                themeToggle.addEventListener("click", () => {

                    document.body.classList.toggle("dark");

                    themeToggle.innerHTML =
                        document.body.classList.contains("dark")
                        ? '<i data-lucide="sun"></i>'
                        : '<i data-lucide="moon"></i>';

                    lucide.createIcons();

                });
            }

            const rtlToggle =
                document.getElementById("rtlToggle");

            if(rtlToggle){

                rtlToggle.addEventListener("click", () => {

                    const isRTL =
                        document.documentElement.dir === "rtl";

                    document.documentElement.dir =
                        isRTL ? "ltr" : "rtl";

                });

            }

            const menuToggle =
                document.getElementById("menuToggle");

            const navMenu =
                document.getElementById("navMenu");

            if(menuToggle && navMenu){

                menuToggle.addEventListener("click", () => {

                    navMenu.classList.toggle("active");

                });

            }

            const dropdowns =
                document.querySelectorAll(".dropdown");

            dropdowns.forEach(drop => {

                const toggleLink =
                    drop.querySelector(".nav-item");

                const menu =
                    drop.querySelector(".dropdown-menu");

                if(toggleLink && menu){

                    toggleLink.addEventListener("click", (e) => {

                        if(window.innerWidth <= 768){

                            e.preventDefault();

                            menu.classList.toggle("show");

                        }

                    });

                }

            });

        }

    