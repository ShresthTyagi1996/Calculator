let number1 = document.querySelectorAll(".btn")[0];
let number2 = document.querySelectorAll(".btn")[1];
let number3 = document.querySelectorAll(".btn")[2];
let number4 = document.querySelectorAll(".btn")[3];
let number5 = document.querySelectorAll(".btn")[4];
let number6 = document.querySelectorAll(".btn")[5];
let number7 = document.querySelectorAll(".btn")[6];
let number8 = document.querySelectorAll(".btn")[7];
let number9 = document.querySelectorAll(".btn")[8];
let number0 = document.querySelectorAll(".btn")[9];
let doubleZero = document.querySelector(".doubleZero");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let deleteButton = document.getElementById("delete");
let resultButton = document.querySelector(".result");
let period = document.querySelector(".period");

let display = document.getElementById("input");

let num1 = [];
let num2 = [];
let arg1 = 0;
let arg2 = 0;
let operator = "";
let result = 0;

period.addEventListener("click", function () {
  num1.push(".");
});

number1.addEventListener("click", function () {
  num1.push(1);
  display.setAttribute("value", num1.join(""));
});

number2.addEventListener("click", function () {
  num1.push(2);
  display.setAttribute("value", num1.join(""));
});

number3.addEventListener("click", function () {
  num1.push(3);
  display.setAttribute("value", num1.join(""));
});

number4.addEventListener("click", function () {
  num1.push(4);
  display.setAttribute("value", num1.join(""));
});

number5.addEventListener("click", function () {
  num1.push(5);
  display.setAttribute("value", num1.join(""));
});

number6.addEventListener("click", function () {
  num1.push(6);
  display.setAttribute("value", num1.join(""));
});

number7.addEventListener("click", function () {
  num1.push(7);
  display.setAttribute("value", num1.join(""));
});

number8.addEventListener("click", function () {
  num1.push(8);
  display.setAttribute("value", num1.join(""));
});

number9.addEventListener("click", function () {
  num1.push(9);
  display.setAttribute("value", num1.join(""));
});

number0.addEventListener("click", function () {
  num1.push(0);
  display.setAttribute("value", num1.join(""));
});

doubleZero.addEventListener("click", function () {
  num1.push(0, 0);
  display.setAttribute("value", num1.join(""));
});

deleteButton.addEventListener("click", function () {
  num1.pop();
  display.setAttribute("value", num1.join(""));
});

add.addEventListener("click", function () {
  arg1 = +num1.join("");
  num1 = [];
  operator = "+";
});

subtract.addEventListener("click", function () {
  arg1 = +num1.join("");
  num1 = [];
  operator = "-";
});

divide.addEventListener("click", function () {
  arg1 = +num1.join("");
  num1 = [];
  operator = "/";
});

multiply.addEventListener("click", function () {
  arg1 = +num1.join("");
  num1 = [];
  operator = "*";
});

resultButton.addEventListener("click", function () {
  arg2 = +num1.join("");
  num1 = [];
  num2.push([arg1, operator, arg2]);
  if (operator == "+") {
    result = arg1 + arg2;
  } else if (operator == "-") {
    result = arg1 - arg2;
  } else if (operator == "/") {
    result = arg1 / arg2;
  } else if (operator == "*") {
    result = arg1 * arg2;
  }
  display.setAttribute("value", result);
  for (let a of num2) {
    console.log(a[0] + " " + a[1] + " " + a[2] + " = " + result);
  }
  num2 = [];
});
