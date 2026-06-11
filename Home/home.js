/* ==========================================
   NEWSLETTER FORM
========================================== */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const emailInput =
            newsletterForm.querySelector("input[type='email']");

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            emailInput.focus();
            return;

        }

        alert("🎉 Thank you for subscribing to GreenScape!");

        emailInput.value = "";

    });

}