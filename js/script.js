/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("show");
        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formMessage) {

            formMessage.textContent =
                "Thank you! Your enquiry has been received.";

        }

        contactForm.reset();

    });

}