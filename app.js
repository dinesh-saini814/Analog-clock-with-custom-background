let hr = document.querySelector("#hr");
let min = document.querySelector("#mn");
let sec = document.querySelector("#sc");

// Get the stylesheet
var sheet = document.styleSheets[0];
// Get all color boxes
var colorBoxes = document.querySelectorAll(".color-box");

let button = document.querySelector("button");
let clock = document.querySelector(".numbers");

setInterval(() => {
  let day = new Date();
  let h = day.getHours() * 30;
  let m = day.getMinutes() * 6;
  let s = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${h + m / 12}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
});

// Get the background color of the clicked box

var colorBoxes = document.querySelectorAll(".color-box");

// Add a click event listener to each color box
colorBoxes.forEach(function (box) {
  box.addEventListener("click", function () {
    // Get the background color of the clicked box
    var color = this.style.backgroundColor;

    // Get all elements with the .numbers class
    var numbers = document.querySelectorAll(".numbers");

    // Change the background color of each .numbers element
    numbers.forEach(function (number) {
      number.style.background = color;
    });
  });
});

// button image change
// button.addEventListener("click", () => {
//   clock.style.background = "url(/wp2560300.jpg)";
//   clock.style.backgroundSize = "cover";
//   clock.style.backgroundPosition = "center";
//   clock.style.backgroundRepeat = "no-repeat";
// });
