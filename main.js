var billInput = document.querySelector(".bill-input");
var peopleInput = document.querySelector(".people-input");
var tipPerPersone = document.getElementById("tip-amount");
var totalPerPerson = document.getElementById("total-amount");
var tips = document.querySelectorAll(".tips");
var tipCustom = document.querySelector(".tip-custom");
var resetBtn = document.querySelector(".reset");
var error = document.querySelector(".error")
billInput.value = "0.0";
peopleInput.value = "1";
tipPerPersone.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;
billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input", peopleInputFunction);
tipCustom.addEventListener("input", tipInputFunction);
resetBtn.addEventListener("click", reset);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});

// function
function billInputFunction() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

function peopleInputFunction() {
  peopleValue = parseFloat(peopleInput.value);
  if(peopleValue<1){
      error.style.display ="flex"
      peopleInput.style.border = "thick solid red"
    }else{
        error.style.display ="none"
        peopleInput.style.border = "none"
        calculateTip();
  }
}

function tipInputFunction() {
  tipValue = parseFloat(tipCustom.value / 100);
  tips.forEach(function (val) {
    val.classList.remove("active-tip");
  });
  calculateTip();
}

function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    
    let total = (billValue + tipAmount * peopleValue) / peopleValue;
    tipPerPersone.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  billInput.value = "0.0";
  billInputFunction();
  peopleInput.value = "1";
  peopleInputFunction();
  tipCustom.value = "";
}
