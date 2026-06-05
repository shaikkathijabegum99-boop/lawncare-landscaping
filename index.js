/* ==================================================
   FAQ ACCORDION
================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

/* ==================================================
   COUNTER ANIMATION
================================================== */

const counters = document.querySelectorAll(".stat-card h2");

const startCounter = (counter) => {

    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    let count = 0;

    const speed = Math.ceil(number / 100);

    const update = () => {

        count += speed;

        if(count < number){

            counter.innerText =
            text.includes("%")
            ? count + "%"
            : count + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = text;

        }
    };

    update();
};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

},{threshold:.5});

counters.forEach(counter=>{
    counterObserver.observe(counter);
});

/* ==================================================
   SCROLL REVEAL ANIMATION
================================================== */

const reveals = document.querySelectorAll(
`
.section,
.card,
.service-card,
.project-card,
.team-card,
.blog-card,
.pricing-card
`
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.15
});

reveals.forEach(el => {

    el.classList.add("reveal");

    revealObserver.observe(el);

});

/* ==================================================
   DARK MODE TOGGLE
================================================== */

const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

    const savedTheme =
    localStorage.getItem("greenscape-theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        const icon = themeBtn.querySelector("i");

        if(icon){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = themeBtn.querySelector("i");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem(
                "greenscape-theme",
                "dark"
            );

            if(icon){
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

        }else{

            localStorage.setItem(
                "greenscape-theme",
                "light"
            );

            if(icon){
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        }

    });

}

/* ==================================================
   RTL TOGGLE
================================================== */

const rtlBtn = document.getElementById("rtlToggle");

if(rtlBtn){

    const savedRTL =
    localStorage.getItem("greenscape-rtl");

    if(savedRTL === "true"){

        document.body.classList.add("rtl");

    }

    rtlBtn.addEventListener("click", () => {

        document.body.classList.toggle("rtl");

        localStorage.setItem(
            "greenscape-rtl",
            document.body.classList.contains("rtl")
        );

    });

}

/* ==================================================
   MOBILE MENU TOGGLE
================================================== */

const mobileBtn =
document.querySelector(".mobile-menu-btn");

const navbar =
document.querySelector(".nav-links");

if(mobileBtn && navbar){

    mobileBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        mobileBtn.classList.toggle("active");

    });

}

/* ==================================================
   CLOSE MOBILE MENU
================================================== */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        if(navbar){

            navbar.classList.remove("active");

        }

        if(mobileBtn){

            mobileBtn.classList.remove("active");

        }

    });

});

/* ==================================================
   HEADER SCROLL EFFECT
================================================== */

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 100){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ==================================================
   SMOOTH SCROLL
================================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

/* ==================================================
   CURRENT YEAR
================================================== */

const year = document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}

/* ==================================================
   LOADING ANIMATION
================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==================================================
   BACK TO TOP BUTTON
================================================== */

const backToTop =
document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 500){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
        section.offsetTop - 120;

        const height =
        section.offsetHeight;

        if(pageYOffset >= top &&
           pageYOffset < top + height){

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){
            link.classList.add("active");
        }

    });

});