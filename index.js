/* ==========================================
   FAQ INTERACTION
========================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/* ==========================================
   HERO FADE ANIMATION
========================================== */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{
    threshold:.2
});

document
.querySelectorAll(
'.hero-content,.service-card,.metric-card,.process-card,.project-card'
)
.forEach(el=>{

    observer.observe(el);

});

/* ==========================================
   SMOOTH SCROLL CTA
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

/* ==========================================
   PROJECT HOVER EFFECT
========================================== */

document
.querySelectorAll(".project-card")
.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0px)";

    });

});