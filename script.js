// ================================
// Day 7 - JavaScript Portfolio
// ================================

// Welcome message
console.log("Welcome to My Portfolio!");

// ------------------------------
// Say Hello Button
// ------------------------------

const helloBtn = document.getElementById("helloBtn");

if (helloBtn) {
    helloBtn.addEventListener("click", function () {
        alert("👋 Hello! Thank you for visiting my portfolio.");
    });
}

// ------------------------------
// Change Heading Text
// ------------------------------

const changeTextBtn = document.getElementById("changeText");
const welcomeText = document.getElementById("welcomeText");

if (changeTextBtn && welcomeText) {
    changeTextBtn.addEventListener("click", function () {
        welcomeText.textContent = "✨ Thanks for exploring my portfolio!";
    });
}

// ------------------------------
// Change Background Color
// ------------------------------

const colorBtn = document.getElementById("colorBtn");

if (colorBtn) {

    let changed = false;

    colorBtn.addEventListener("click", function () {

        if (!changed) {
            document.body.style.background =
                "linear-gradient(135deg,#dbeafe,#f3e8ff)";
        } else {
            document.body.style.background = "";
        }

        changed = !changed;
    });
}

// ------------------------------
// Scroll To Top Button
// ------------------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (topBtn) {

        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ------------------------------
// Smooth Navigation Scroll
// ------------------------------

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ------------------------------
// Page Loaded Message
// ------------------------------

window.addEventListener("load", function () {

    console.log("Portfolio Loaded Successfully!");

});

// ------------------------------
// Footer Year (Optional)
// ------------------------------

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const text = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || text === ""){

        message.style.color = "red";
        message.textContent = "Please fill all the fields.";

        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        message.style.color = "red";
        message.textContent = "Please enter a valid email.";

        return;
    }

    message.style.color = "green";
    message.textContent = "Message sent successfully!";

    form.reset();

});