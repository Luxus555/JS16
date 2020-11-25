let money = 0,
  income = "Фриланс",
  addExpenses = "",
  deposit = true,
  mission = 100000,
  period = "12",
  //expenses1 = "",
  amount1 = 0,
  expenses2 = "",
  amount2 = 0,
  budgetMonth = 0,
  budgetDay = 0;

money = +prompt("Ваш месячный доход?", 3000);

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "Интернет, Бензин, Коммуналка"
);
deposit = confirm("Есть ли у вас депозит в банке?", false);

let expenses1 = prompt("Введите обязательную статью расходов", "Детский сад");
amount1 = +prompt("Во сколько это обойдется", 1000);
expenses1 = prompt("Введите обязательную статью расходов", "Ипотека");
amount1 = +prompt("Во сколько это обойдется", 1000);

let showTypeOf = function (item) {
  console.log(typeof item);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(","));

function getExpensesMonth(amount1, amount2) {
  return amount1 + amount2;
}
console.log("Расходы за месяц: " + getExpensesMonth());

let getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return mission / accumulatedMonth;
  console.log("Цель будет достигнута за: " + richTarget + " месяцев");
}

//budgetMonth = money - amount1 - amount2;

budgetDay = Math.floor(accumulatedMonth / 30);

console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " фунтов");
console.log(addExpenses.toLowerCase().split(" "));
console.log("Бюджет на месяц " + budgetMonth);
console.log("Бюджет на день: " + budgetDay);

let richTarget = Math.ceil(mission / budgetMonth);
console.log("Цель будет достигнута за: " + richTarget + " месяцев");

if (budgetDay > 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else console.log("Что то пошло не так");
