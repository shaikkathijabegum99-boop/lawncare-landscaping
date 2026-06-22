

        document.addEventListener("DOMContentLoaded", () => {

            /* FAQ Accordion */

            const faqItems = document.querySelectorAll(".faq-item");

            faqItems.forEach(item => {

                const question = item.querySelector(".faq-question");

                question.addEventListener("click", () => {

                    faqItems.forEach(faq => {

                        if (faq !== item) {

                            faq.classList.remove("active");

                        }

                    });

                    item.classList.toggle("active");

                });

            });


            /* Scroll To Top */

            const scrollBtn = document.getElementById("scrollTopBtn");

            window.addEventListener("scroll", () => {

                if (window.scrollY > 400) {

                    scrollBtn.classList.add("show");

                } else {

                    scrollBtn.classList.remove("show");

                }

            });

            scrollBtn.addEventListener("click", () => {

                window.scrollTo({

                    top: 0,
                    behavior: "smooth"

                });

            });

        });

