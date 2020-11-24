let money = 0,
  income = "Фриланс",
  addExpenses = "",
  deposit = true,
  mission = 100000,
  period = "12",
  expenses1 = "",
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

expenses1 = prompt("Введите обязательную статью расходов", "Детский сад");
amount1 = +prompt("Во сколько это обойдется", 1000);
expenses1 = prompt("Введите обязательную статью расходов", "Ипотека");
amount1 = +prompt("Во сколько это обойдется", 1000);

budgetMonth = money - amount1 - amount2;

budgetDay = Math.floor(budgetMonth / 30);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
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

function getExpensesMonth(amount1, amount2) {
  return amount1 + amount2;
}
getExpensesMonth(amount1, amount2);

function getAccumulatedMonth() {
  return console.log(money - amount1 - amount2);
}
getAccumulatedMonth();

let accumulatedMonth = function getAccumulatedMonth() {
  console.log(accumulatedMonth);
};

function getTargetMonth() {
  console.log("Цель будет достигнута за: " + richTarget + " месяцев");
}
getTargetMonth();
