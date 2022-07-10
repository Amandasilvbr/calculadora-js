// Change theme
const btnTheme = document.getElementById("img-day").addEventListener("click", changeThemeDay);
const btnThemeNight = document.getElementById("img-night").addEventListener("click", changeThemeNight);
let day= document.getElementById("day-theme");
let night= document.getElementById("night-theme");

function changeThemeDay() {
    day.style.display = "none";
    night.style.display = "block";
    document.getElementById("calculator").style.backgroundColor = "#17171C";
    document.getElementById("background").style.backgroundColor= "#2E2F38";
}

function changeThemeNight() {
    day.style.display = "block";
    night.style.display = "none";
    document.getElementById("calculator").style.backgroundColor = "#F1F2F3";
    document.getElementById("background").style.backgroundColor= "#E5E5E5";
}