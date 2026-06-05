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