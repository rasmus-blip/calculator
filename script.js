"use strict";

console.log("det kører");
let input1value;
let input2value;
let parsedInput1;
let parsedInput2;
let result = null;
document.querySelector("button").addEventListener("click", getInput);
document.querySelector("#clear").addEventListener("click", clearResults);
getInput();

function getInput() {
  input1value = document.querySelector("#firstnumber").value;
  input2value = document.querySelector("#secondnumber").value;
  parsedInput1 = parseInt(input1value, 10);
  parsedInput2 = parseInt(input2value, 10);
  calculateResult();
}

function calculateResult() {
  let operator = document.querySelector("#operator").value;
  if (operator === "add") {
    result = parsedInput1 + parsedInput2;
  } else if (operator === "sub") {
    result = input1value - input2value;
  } else if (operator === "mul") {
    result = input1value * input2value;
  } else {
    result = input1value / input2value;
  }
  document.querySelector("#firstnumber").value = result;
  showResults();
  clearInput2();
}

function clearInput2() {
  document.querySelector("#secondnumber").value = null;
}

function showResults() {
  const container = document.querySelector("#results");
  const createLi = document.createElement("li");
  createLi.innerHTML = result;
  container.appendChild(createLi);
  container.scrollTo(1, 292929283928932);
}

function clearResults() {
  document.querySelector("#results").innerHTML = null;
  document.querySelector("#firstnumber").value = null;
}
