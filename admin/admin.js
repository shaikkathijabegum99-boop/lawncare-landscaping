







const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}


document.addEventListener("click", (e) => {
    if (sidebar && menuToggle) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove("active");
            }
        }
    }
});




const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});




const actionCards = document.querySelectorAll(".action-card");

actionCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");

        setTimeout(() => {
            card.classList.remove("clicked");
        }, 200);
    });
});




const tableRows = document.querySelectorAll("table tr");

tableRows.forEach(row => {
    row.addEventListener("mouseenter", () => {
        row.style.background = "rgba(46,125,50,0.05)";
    });

    row.addEventListener("mouseleave", () => {
        row.style.background = "transparent";
    });
});




const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}




const style = document.createElement("style");
style.innerHTML = `
.action-card.clicked {
    transform: scale(0.96);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
`;
document.head.appendChild(style);




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const revenueChart = new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun"],
        datasets: [{
            label: "Revenue (₹)",
            data: [12000, 19000, 15000, 22000, 30000, 42000],
            borderColor: "#1b5e20",
            backgroundColor: "rgba(27,94,32,0.2)",
            fill: true,
            tension: 0.4
        }]
    }
});


const serviceChart = new Chart(document.getElementById("serviceChart"), {
    type: "doughnut",
    data: {
        labels: ["Irrigation","Design","Maintenance","Lighting"],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ["#1b5e20","#2e7d32","#bfa46f","#111827"]
        }]
    }
});const rtlBtn = document.getElementById("rtlToggle");

rtlBtn?.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {
        html.setAttribute("dir", "ltr");
    } else {
        html.setAttribute("dir", "rtl");
    }
});