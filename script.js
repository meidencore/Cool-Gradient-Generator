// var declaration

var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");


// function declaration

function setGradient() {
    body.style.backgroundImage = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.backgroundImage + ";"; 
}

// add event listener

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
