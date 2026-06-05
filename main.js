// =============================
// EDUSCHOOL JAVASCRIPT
// =============================

// DARK MODE

const themeBtn = document.getElementById("themeBtn");

let darkMode = false;

themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    if (darkMode) {

        document.body.style.background = "#111827";
        document.body.style.color = "#ffffff";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.style.background = "#ffffff";
        document.body.style.color = "#1f2937";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }
});
// =============================
// ADMISSION BUTTON
// =============================

const admissionBtn =
    document.querySelector(".admission-btn");

if (admissionBtn) {

    admissionBtn.addEventListener("click", () => {

        alert(
            "🎓 Admission application submitted successfully!"
        );

    });

}
// =============================
// HERO BUTTONS
// =============================

const primaryBtn =
    document.querySelector(".primary-btn");

if (primaryBtn) {

    primaryBtn.addEventListener("click", () => {

        alert(
            "Welcome to EduSchool 🚀"
        );

    });

}
const secondaryBtn =
    document.querySelector(".secondary-btn");

if (secondaryBtn) {

    secondaryBtn.addEventListener("click", () => {

        document.querySelector(".about")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}
// =============================
// SUBJECT CARDS
// =============================

const subjectCards =
    document.querySelectorAll(".subject-card");

subjectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.background =
            "#2563eb";

        card.style.color =
            "#ffffff";

        const icon =
            card.querySelector("i");

        icon.style.color =
            "#ffffff";

  });
    card.addEventListener("mouseleave", () => {

        card.style.background =
            "#ffffff";

        card.style.color =
            "#1f2937";

        const icon =
            card.querySelector("i");

        icon.style.color =
            "#2563eb";

    });

});
// =============================
// TEACHER CARDS
// =============================

const teacherCards =
    document.querySelectorAll(".teacher-card");

teacherCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px)";

        card.style.boxShadow =
            "0 15px 30px rgba(37,99,235,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

        card.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";

    });

});

// =============================
// NAVBAR SHADOW
// =============================

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow =
            "0 2px 20px rgba(0,0,0,.08)";

    }

});
// =============================
// LOGO CLICK TO TOP
// =============================

const logo =
    document.querySelector(".logo");

logo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
// =============================
// SCROLL REVEAL
// =============================

const sections =
    document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
        "translateY(60px)";
    section.style.transition =
        "all .8s ease";

});
function revealSections() {

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (top < screenHeight - 100) {

            section.style.opacity =
                "1";

            section.style.transform =
                "translateY(0)";

        }

    });

}
window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

// =============================
// COUNTER ANIMATION
// =============================
const counters =
    document.querySelectorAll(".about-card h3");

let started = false;

function startCounters() {

    if (started) return;

    counters.forEach(counter => {

        const target =
            parseInt(
                counter.innerText
                    .replace("+", "")
            );

        let count = 0;

        function updateCounter() {

            count += Math.ceil(
                target / 50
            );
            if (count < target) {

                counter.innerText =
                    count + "+";

                setTimeout(
                    updateCounter,
                    30
                );

            } else {

                counter.innerText =
                    target + "+";

            }

        }

        updateCounter();

    });

    started = true;
}
window.addEventListener("scroll", () => {

    const about =
        document.querySelector(".about");

    const top =
        about.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        startCounters();

    }

});

// =============================
// PAGE LOADED
// =============================

console.log(
    "🎓 EduSchool Website Loaded Successfully"
);