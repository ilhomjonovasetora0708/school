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