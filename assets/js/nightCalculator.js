// Calculator
const btnsNight = Array.from(document.querySelectorAll(".btn-night"));
const displayNight=document.getElementById("display-night")
const previousNight = document.getElementById("previous-night");
const resultNight = document.getElementById("result-night")

btnsNight.forEach(btnNight => {
    btnNight.addEventListener("click", (e) => {
        let contentNight = e.target.textContent
        processNight(contentNight)
    })
});

function processNight(btnValueNight) {
    btnValueNight === "=" || btnValueNight === "C" || btnValueNight === "CE" ? previousNight.textContent = previousNight.textContent : previousNight.textContent += btnValueNight

    if (btnValueNight === "C") { resultNight.textContent = ""; previousNight.textContent = "" }
    if (btnValueNight === "=") { resultNight.textContent = eval(previousNight.textContent) }
}