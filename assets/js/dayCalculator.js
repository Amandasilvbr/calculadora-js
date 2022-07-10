// Calculator
const btnsDay = Array.from(document.querySelectorAll(".btn-day"));
const displayDay = document.getElementById("display-day")
const previousDay = document.getElementById("previous-day");
const resultDay = document.getElementById("result-day");

btnsDay.forEach(btnDay => {
    btnDay.addEventListener("click", (e) => {
        let contentDay = e.target.textContent
        processDay(contentDay)
    })
});

function processDay(btnValueDay) {
    btnValueDay === "=" || btnValueDay === "C" || btnValueDay === "CE" ? previousDay.textContent = previousDay.textContent : previousDay.textContent += btnValueDay

    if (btnValueDay === "C") { resultDay.textContent = ""; previousDay.textContent = "" }
    if (btnValueDay === "=") { resultDay.textContent = eval(previousDay.textContent).toFixed(12) }
}