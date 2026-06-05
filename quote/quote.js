/* ==========================================
   FAQ ACCORDION
========================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

/* ==========================================
   QUOTE FORM SUBMIT
========================================== */

const quoteForm = document.querySelector(".quote-card form");

if (quoteForm) {

    quoteForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            quoteForm.querySelector('input[type="text"]').value;

        alert(
            `Thank you ${name || "Customer"}!\n\nYour quote request has been submitted successfully.\nOur team will contact you within 24 hours.`
        );

        quoteForm.reset();

    });

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

const cards = document.querySelectorAll(
    ".card, .faq-item"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

cards.forEach(card => {

    card.classList.add("hidden-card");
    observer.observe(card);

});