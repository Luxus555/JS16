"use strict";

let money = 0;

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt("Перечислите возможные расходы через запятую");
    appData.addExpenses = addExpenses.toLowerCase().split(" ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let key;
    for (let i = 0; i < 3; i++) {
      key = prompt("Введите обязательную статью расходов");
      appData.expenses[key] = +prompt("Во сколько это обойдется?");
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function () {
    let richTarget = Math.ceil(appData.mission / appData.budgetMonth);
    if (richTarget >= 1) {
      return console.log(
        "Цель будет достигнута за: " + richTarget + " месяцев"
      );
    } else {
      console.log("Цель не будет достигнута");
    }
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
      console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
  },
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log("Расходы за месяц: ", appData.budgetMonth);
appData.getTargetMonth();
appData.getStatusIncome();

console.log("Наша программа включает в себя данные:");
for (let key in appData) {
  console.log(`${key} : ${appData[key]}`);
}

// let income = "Фриланс",
//   mission = 50000,
//   period = "12",
//   amount1 = 0,
//   amount2 = 0,
//   budgetMonth = 0,
//   budgetDay = 0,
//   expenses = [];

// const getExpensesMonth = function () {
//   let sum = 0;

//   for (let i = 0; i < 3; i++) {
//     expenses[i] = prompt("Введите обязательную статью расходов");

//     sum += +prompt("Во сколько это обойдется?");
//   }
//   console.log(expenses);
//   return sum;
// };

// let expensesAmount = getExpensesMonth();

// console.log("Расходы за месяц: " + appData.expensesAmount);

// const getAccumulatedMonth = function () {
//   return appData.money - appData.expensesAmount;
// };

// let accumulatedMonth = getAccumulatedMonth();

// const getTargetMonth = function () {
//   let richTarget = Math.ceil(appData.mission / accumulatedMonth);
//   if (richTarget >= 1) {
//     return console.log("Цель будет достигнута за: " + richTarget + " месяцев");
//   } else {
//     console.log("Цель не будет достигнута");
//   }
// };
// appData.getTargetMonth();

// //appData.budgetDay = Math.floor(accumulatedMonth / 30);

// console.log("Цель заработать " + appData.mission + " фунтов");
// console.log("Бюджет на день: " + appData.budgetDay);

// const getStatusIncome = function () {
//   if (appData.budgetDay > 1200) {
//     console.log("У вас высокий уровень дохода");
//   } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
//     console.log("У вас средний уровень дохода");
//   } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
//     console.log("К сожалению у вас уровень дохода ниже среднего");
//   }
// };
//appData.getStatusIncome();
