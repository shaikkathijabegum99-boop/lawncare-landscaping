








document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        if (targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});





document.querySelectorAll(".cta .btn, .cta-simple .btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");

        setTimeout(() => {
            btn.classList.remove("clicked");
        }, 200);
    });
});





const pricingCards = document.querySelectorAll(".pricing-card");

pricingCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        pricingCards.forEach(c => c.classList.remove("focus"));
        card.classList.add("focus");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("focus");
    });
});





const revealItems = document.querySelectorAll(
    ".section, .card, .pricing-card, .cta-simple"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealItems.forEach(el => observer.observe(el));