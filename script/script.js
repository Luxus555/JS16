"use strict";

let money = prompt("Ваш месячный доход");
console.log(typeof money);
let money1 = prompt("Ваш месячный доход");
console.log(typeof money1);

let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  ""
);
console.log(addExpenses.length);
let addExpenses1 = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  ""
);

let deposit = confirm("Есть ли у вас депозит в банке?");
console.log(typeof deposit);
let deposit1 = confirm("Есть ли у вас депозит в банке?");

let expenses = prompt("Общие расходы");
let expenses2 = prompt("Общие расходы");

// let income = "Frilance";
// console.log(typeof income);

let budgetMonth = money - expenses;
console.log("Бюджет на месяц " + budgetMonth);

let mission = 100000;
console.log("Цель заработать " + mission + " фунтов");
let period = Math.ceil(mission / budgetMonth);
console.log("Период равен " + period + " месяцев");
console.log("Цель будет достигнута за: " + period + " месяцев");

console.log("Период равен " + period + " месяцев.");
console.log("Цель - заработать: " + mission + " фунтов");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(" "));

let budgetDay = Math.floor(+money / 30);
console.log("Бюджет на день: " + budgetDay);

if (budgetDay > 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else console.log("Что то пошло не так");

let num = 266219,
  result = [],
  newNumber = num.toString();

for (let i = 0, j = newNumber.length; i < j; i += 1) {
  result.push(+newNumber[i]);
}

let proizvedenie = result.reduce((a, b) => a * b);

console.log(proizvedenie);

let stepen = proizvedenie ** 3;

console.log(stepen);

let Itogo = parseInt(stepen.toString().slice(0, 2));

alert(Itogo);
