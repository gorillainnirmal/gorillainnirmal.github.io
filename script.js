// ==============================
// GORILLA IN NIRMAL
// Premium JavaScript
// ==============================

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Header Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.padding = "15px 8%";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.padding = "20px 8%";

    }

});

// Smooth Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Hero Title Animation
window.addEventListener("load", () => {

    const title = document.querySelector(".hero h1");
    const subtitle = document.querySelector(".hero p");
    const button = document.querySelector(".btn");

    title.style.opacity = "0";
    subtitle.style.opacity = "0";
    button.style.opacity = "0";

    title.style.transform = "translateY(40px)";
    subtitle.style.transform = "translateY(40px)";
    button.style.transform = "translateY(40px)";

    setTimeout(() => {

        title.style.transition = "1s";
        subtitle.style.transition = "1.2s";
        button.style.transition = "1.4s";

        title.style.opacity = "1";
        subtitle.style.opacity = "1";
        button.style.opacity = "1";

        title.style.transform = "translateY(0)";
        subtitle.style.transform = "translateY(0)";
        button.style.transform = "translateY(0)";

    }, 300);

});

console.log("
