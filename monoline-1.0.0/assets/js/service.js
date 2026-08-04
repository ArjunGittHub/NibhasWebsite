// ============================
// Scroll Reveal
// ============================

const reveals = document.querySelectorAll(
    ".service-block,.feature-card,.cta-box,.accordion-item"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("reveal", "active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ============================
// Active Navigation
// ============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu-wrapper a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

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


// ============================
// Smooth Scroll
// ============================

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ============================
// Image Hover Tilt
// ============================

document.querySelectorAll(".service-image").forEach(img => {

    img.addEventListener("mousemove", e => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 30;
        const rotateX = -(y - rect.height / 2) / 30;

        img.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "";

    });

});

const menu = document.getElementById("menuWrapper");

let direction = 1;
let position = 0;
const speed = 0.6; // pixels per frame

function animateMenu() {

    const containerWidth = menu.parentElement.offsetWidth;
    const menuWidth = menu.scrollWidth;

    const maxMove = Math.max(0, menuWidth - containerWidth);

    position += speed * direction;

    if (position >= maxMove) {
        direction = -1;
    }

    if (position <= 0) {
        direction = 1;
    }

    menu.style.transform = `translateX(${-position}px)`;

    requestAnimationFrame(animateMenu);
}

animateMenu();

const menu = document.getElementById("menuWrapper");

let start = null;
const duration = 8000; // 8 seconds one way

function animate(timestamp){

    if(!start) start = timestamp;

    const elapsed = (timestamp - start) % (duration * 2);

    let progress = elapsed / duration;

    if(progress > 1){
        progress = 2 - progress;
    }

    // ease in-out
    progress = 0.5 - Math.cos(progress * Math.PI) / 2;

    const maxMove = menu.scrollWidth - menu.parentElement.offsetWidth;

    menu.style.transform = `translateX(${-maxMove * progress}px)`;

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);