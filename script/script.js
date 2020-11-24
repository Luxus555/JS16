"use strict";

let money = +prompt("Ваш месячный доход?"),
  income = "Freelance",
  addExpenses = prompt(
    "Перечислите возможные расходы за рассчитываемый период через запятую",
    ""
  ),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 10000;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);

let expenses1 = prompt("Введите обязательную статью расходов?"),
  amount1 = +prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов?"),
  amount2 = +prompt("Во сколько это обойдется?");

let budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц " + budgetMonth);

console.log("Цель заработать " + mission + " фунтов");
let period = Math.ceil(mission / budgetMonth);
console.log("Период равен " + period + " месяцев");
console.log("Цель будет достигнута за: " + period + " месяцев");

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

/*let num = 266219,
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
alert(Itogo);*/
