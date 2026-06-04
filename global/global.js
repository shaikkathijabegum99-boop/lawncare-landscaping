/* ==========================================
   DARK MODE
========================================== */

const themeToggle =
document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

if(themeToggle){

    themeToggle.addEventListener("click",()=>{

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

function updateThemeIcon(){

    const icon =
    themeToggle?.querySelector("i");

    if(!icon) return;

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }
}

updateThemeIcon();

/* ==========================================
   RTL
========================================== */

const rtlToggle =
document.getElementById("rtl-toggle");

const savedDir =
localStorage.getItem("direction");

if(savedDir){
    document.documentElement.dir = savedDir;
}

if(rtlToggle){

    rtlToggle.addEventListener("click",()=>{

        const currentDir =
        document.documentElement.dir;

        const newDir =
        currentDir === "rtl"
        ? "ltr"
        : "rtl";

        document.documentElement.dir =
        newDir;

        localStorage.setItem(
            "direction",
            newDir
        );

    });

}

/* ==========================================
   MOBILE MENU
========================================== */

const hamburger =
document.getElementById("hamburger");

const mobileMenu =
document.getElementById("mobile-menu");

if(hamburger && mobileMenu){

    hamburger.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        hamburger.classList.toggle("active");

    });

}

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const currentPage =
window.location.pathname.split("/").pop();

document
.querySelectorAll(".nav-link")
.forEach(link=>{

    const href =
    link.getAttribute("href");

    if(
        href &&
        href.includes(currentPage)
    ){

        link.style.color =
        "var(--primary)";

        link.style.fontWeight =
        "700";

    }

});

/* ==========================================
   SCROLL HEADER
========================================== */

const header =
document.querySelector(".site-header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow =
        "none";

    }

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll("[data-count]");

const runCounter = () => {

    counters.forEach(counter=>{

        const target =
        Number(counter.dataset.count);

        let current = 0;

        const increment =
        target / 100;

        const timer =
        setInterval(()=>{

            current += increment;

            if(current >= target){

                counter.textContent =
                target;

                clearInterval(timer);

            }else{

                counter.textContent =
                Math.floor(current);

            }

        },15);

    });

};

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            runCounter();
            observer.disconnect();

        }

    });

});

if(counters.length){
    observer.observe(counters[0]);
}

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

