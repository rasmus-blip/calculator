"use strict";

console.log("det kører");
let input1value;
let input2value;
let parsedInput1;
let parsedInput2;
document.querySelector("button").addEventListener("click", getInput);
getInput();

function getInput() {
  input1value = document.querySelector("#firstnumber").value;
  input2value = document.querySelector("#secondnumber").value;
  parsedInput1 = parseInt(input1value, 10);
  parsedInput2 = parseInt(input2value, 10);

  console.log(parsedInput1);

  if (input1value === input2value) {
    console.log("value is truthy");
  } else {
    console.log("value is falsy");
  }
  calculateResult();
}

function calculateResult() {
  let operator = document.querySelector("#operator").value;
  if (operator === "add") {
    document.querySelector("#firstnumber").value = parsedInput1 + parsedInput2;
  } else if (operator === "sub") {
    document.querySelector("#firstnumber").value = input1value - input2value;
  } else if (operator === "mul") {
    document.querySelector("#firstnumber").value = input1value * input2value;
  } else {
    document.querySelector("#firstnumber").value = input1value / input2value;
  }

  clearInput2();

  console.log("den virker");
}

function clearInput2() {
  document.querySelector("#secondnumber").value = "";
}
