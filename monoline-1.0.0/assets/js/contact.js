// ==============================
// Scroll Reveal
// ==============================

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.2,
    }
);

timelineItems.forEach((item) => {
    observer.observe(item);
});

// ==============================
// Timeline Icon Glow
// ==============================

window.addEventListener("scroll", () => {

    timelineItems.forEach((item) => {

        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.6 &&
            rect.bottom > window.innerHeight * 0.4) {

            const icon = item.querySelector(".timeline-icon");

            icon.style.transform = "scale(1.15)";
            icon.style.boxShadow =
                "0 0 35px rgba(37,99,235,.9), 0 0 80px rgba(6,182,212,.45)";

        } else {

            const icon = item.querySelector(".timeline-icon");

            icon.style.transform = "scale(1)";
            icon.style.boxShadow =
                "0 0 20px rgba(37,99,235,.4)";

        }

    });

});

// ==============================
// Mouse Tilt Effect
// ==============================

const cards = document.querySelectorAll(".timeline-content");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = -(y - rect.height / 2) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});

// ==============================
// Magnetic Button
// ==============================

const btn = document.querySelector(".send-btn");

if (btn) {

    btn.addEventListener("mousemove", (e) => {

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 6;
        const moveY = (y - rect.height / 2) / 6;

        btn.style.transform =
            `translate(${moveX}px,${moveY}px)`;

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translate(0,0)";

    });

}

// ==============================
// Ripple Effect
// ==============================

document.querySelectorAll(".send-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

// ==============================
// Contact Form Animation
// ==============================

const inputs = document.querySelectorAll(".form-control");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "translateY(-4px)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "translateY(0)";

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.documentElement.style.scrollBehavior = "smooth";