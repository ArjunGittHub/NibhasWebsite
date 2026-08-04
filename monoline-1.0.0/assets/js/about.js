/*=====================================
    ABOUT SECTION JAVASCRIPT
=====================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=====================================
        SCROLL REVEAL ANIMATION
    =====================================*/

    const revealElements = document.querySelectorAll(
        ".company-image, .company-title, .section-mini, .feature-box, .mission-card"
    );

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(60px)";
        element.style.transition = "all .8s ease";

        revealObserver.observe(element);

    });



    /*=====================================
        PARALLAX IMAGE
    =====================================*/

    const imageContainer = document.querySelector(".company-image");

    if (imageContainer) {

        imageContainer.addEventListener("mousemove", function (e) {

            const img = this.querySelector("img");

            const rect = this.getBoundingClientRect();

            const x = (e.clientX - rect.left - rect.width / 2) / 35;
            const y = (e.clientY - rect.top - rect.height / 2) / 35;

            img.style.transform =
                `scale(1.04) translate(${x}px, ${y}px)`;

        });

        imageContainer.addEventListener("mouseleave", function () {

            const img = this.querySelector("img");

            img.style.transform = "scale(1) translate(0,0)";

        });

    }



    /*=====================================
        FEATURE CARD HOVER
    =====================================*/

    document.querySelectorAll(".feature-box").forEach((card) => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });



    /*=====================================
        3D TILT CARD
    =====================================*/

    document.querySelectorAll(".mission-card").forEach((card) => {

        card.addEventListener("mousemove", function (e) {

            const rect = this.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = (x / rect.width - 0.5) * 12;
            const rotateX = (y / rect.height - 0.5) * -12;

            this.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "";

        });

    });



    /*=====================================
        FLOATING EXPERIENCE CARD
    =====================================*/

    const badge = document.querySelector(".experience-box");

    if (badge) {

        let position = 0;

        function floatingAnimation() {

            position += 0.03;

            badge.style.transform =
                `translateY(${Math.sin(position) * 8}px)`;

            requestAnimationFrame(floatingAnimation);

        }

        floatingAnimation();

    }



    /*=====================================
        BUTTON RIPPLE EFFECT
    =====================================*/

    document.querySelectorAll(".feature-box, .mission-card").forEach((item) => {

        item.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = this.getBoundingClientRect();

            ripple.style.left = e.clientX - rect.left + "px";
            ripple.style.top = e.clientY - rect.top + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });



    /*=====================================
        NUMBER COUNTER (OPTIONAL)
    =====================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    animateCounter(counter);

                    observer.unobserve(counter);

                }

            });

        });

        observer.observe(counter);

    });

    function animateCounter(counter) {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 100;

        function update() {

            current += increment;

            if (current < target) {

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        }

        update();

    }

});

const founderCard = document.querySelector(".founder-card");

if (founderCard) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                founderCard.style.opacity = "1";
                founderCard.style.transform = "translateY(0)";

            }

        });

    });

    founderCard.style.opacity = "0";
    founderCard.style.transform = "translateY(60px)";
    founderCard.style.transition = "all .8s ease";

    observer.observe(founderCard);

}

