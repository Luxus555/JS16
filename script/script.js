"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money = 0,
  income = "Фриланс",
  mission = 100000,
  period = "12",
  amount1 = 0,
  amount2 = 0,
  budgetMonth = 0,
  budgetDay = 0,
  addExpenses = prompt("Перечислите возможные расходы через запятую"),
  deposit = confirm("Есть ли у вас депозит в банке?");

let showTypeOf = function (item) {
  console.log(typeof item);
};

const start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};

start();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

console.log(addExpenses.toLowerCase().split(" "));

const getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов");

    sum += +prompt("Во сколько это обойдется?");
  }
  console.log(expenses);
  return sum;
};

const expensesAmount = getExpensesMonth();

console.log("Расходы за месяц: " + expensesAmount);

const getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function () {
  let richTarget = Math.ceil(mission / accumulatedMonth);
  if (richTarget >= 1) {
    return console.log("Цель будет достигнута за: " + richTarget + " месяцев");
  } else {
    console.log("Цель не будет достигнута");
  }
};
getTargetMonth();

budgetDay = Math.floor(accumulatedMonth / 30);

console.log("Цель заработать " + mission + " фунтов");
console.log("Бюджет на день: " + budgetDay);

const getStatusIncome = function () {
  if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  }
};
getStatusIncome();
