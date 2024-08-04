// calculator
let calc = 0,
  num1 = 0,
  num2 = 0;

let getNum1 = document.querySelector("#num1");
let getNum2 = document.querySelector("#num2");
let button = document.querySelector("#calculateBtn");
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let times = document.querySelector("#times");
let divide = document.querySelector("#divide");
button.addEventListener("click", (e) => {
  num1 = Number(getNum1.value);
  num2 = Number(getNum2.value);
  number1.innerHTML = `number one is => ${num1}`;
  number2.innerHTML = `number two is => ${num2}`;
  plus.innerHTML = `Plus => ${num1 + num2}`;
  minus.innerHTML = `minus => ${num1 - num2}`;
  times.innerHTML = `times => ${num1 * num2}`;
  divide.innerHTML = `divide => ${num1 / num2}`;
});
