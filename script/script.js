let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money = 0,
  income = "Фриланс",
  addExpenses = "",
  deposit = true,
  mission = 100000,
  period = "12",
  //expenses1 = "",
  amount1 = 0,
  //expenses2 = "",
  amount2 = 0,
  budgetMonth = 0,
  budgetDay = 0;

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "Интернет, Бензин, Коммуналка"
);
deposit = confirm("Есть ли у вас депозит в банке?", false);

//let expenses1 = prompt("Введите обязательную статью расходов", "Детский сад");
//amount1 = +prompt("Во сколько это обойдется", 1000);
//expenses1 = prompt("Введите обязательную статью расходов", "Ипотека");
//amount1 = +prompt("Во сколько это обойдется", 1000);

let showTypeOf = function (item) {
  console.log(typeof item);
};

let start = function () {
  money = prompt("Ваш месячный доход?");

  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход?");
  }
};

start();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(addExpenses.length);

let expenses = [];

console.log(addExpenses.toLowerCase().split(" "));

let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses[i] = prompt("Введите обязательную статью расходов");
    }
    sum += +prompt("Во сколько это обойдется?");
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log("Расходы за месяц: " + getExpensesMonth());

let getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function () {
  return mission / accumulatedMonth;
};

let richTarget = getTargetMonth();
richTarget = Math.ceil(mission / accumulatedMonth);
console.log("Цель будет достигнута за: " + richTarget + " месяцев");

//budgetMonth = money - amount1 - amount2;

budgetDay = Math.floor(accumulatedMonth / 30);

console.log("Цель заработать " + mission + " фунтов");

//console.log("Бюджет на месяц " + getTargetMonth());
console.log("Бюджет на день: " + budgetDay);

//let richTarget = Math.ceil(mission / budgetMonth);
//console.log("Цель будет достигнута за: " + richTarget + " месяцев");

let getStatusIncome = function () {
  if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay < 600 && budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  } else console.log("Что то пошло не так");
};
getStatusIncome();
