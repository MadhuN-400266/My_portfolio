// ==========================================
// Portfolio JavaScript
// Clean & Optimized Version
// ==========================================

console.log("🚀 Welcome to My Portfolio!");

/* ==========================================
   DOM ELEMENTS
========================================== */

const helloBtn = document.getElementById("helloBtn");
const changeTextBtn = document.getElementById("changeText");
const colorBtn = document.getElementById("colorBtn");
const topBtn = document.getElementById("topBtn");

const welcomeText = document.getElementById("welcomeText");

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const year = document.getElementById("year");

const navLinks = document.querySelectorAll("nav a");


/* ==========================================
   HELPER FUNCTION
========================================== */

const showMessage = (text, color) => {
    if (!formMessage) return;

    formMessage.textContent = text;
    formMessage.style.color = color;
};


/* ==========================================
   HELLO BUTTON
========================================== */

if (helloBtn) {
    helloBtn.addEventListener("click", () => {
        alert("👋 Hello! Thank you for visiting my portfolio.");
    });
}


/* ==========================================
   CHANGE HERO TEXT
========================================== */

if (changeTextBtn && welcomeText) {
    changeTextBtn.addEventListener("click", () => {
        welcomeText.textContent =
            "✨ Thanks for exploring my portfolio!";
    });
}


/* ==========================================
   BACKGROUND TOGGLE
========================================== */

let backgroundChanged = false;

if (colorBtn) {

    colorBtn.addEventListener("click", () => {

        backgroundChanged = !backgroundChanged;

        document.body.style.background = backgroundChanged
            ? "linear-gradient(135deg,#dbeafe,#f3e8ff)"
            : "";

    });

}


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

if (topBtn) {

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 200 ? "block" : "none";

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ==========================================
   SMOOTH NAVIGATION
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const subject = document.getElementById("subject")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if (!name || !email || !subject || !message) {
            showMessage("Please fill in all the fields.", "red");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email.", "red");
            return;
        }

        showMessage("✅ Message sent successfully!", "green");

        form.reset();

    });

}


/* ==========================================
   FOOTER YEAR
========================================== */

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {
    console.log("✅ Portfolio Loaded Successfully!");
});