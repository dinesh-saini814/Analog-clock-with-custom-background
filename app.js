let hr = document.querySelector("#hr");
let min = document.querySelector("#mn");
let sec = document.querySelector("#sc");

// Get the stylesheet
var sheet = document.styleSheets[0];
// Get all color boxes
var colorBoxes = document.querySelectorAll(".color-box");

let button = document.querySelector("button");
let background = document.querySelector(".container");
let clock = document.querySelector(".numbers");
let clock1 = document.querySelector(".numbers::after");

setInterval(() => {
  let day = new Date();
  let h = day.getHours() * 30;
  let m = day.getMinutes() * 6;
  let s = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${h + m / 12}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
});

// button.addEventListener("click", () => {
//   clock.style.background = "linear-gradient(111deg, #d6cf60, #ff9999)";
// });

// Get all divs with class 'colour-box'
// Get all color boxes
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

sheet.insertRule(
  `
	.clock .numbers::before{
    background: #ff0000;
  }
`,
  sheet.cssRules.length
);
