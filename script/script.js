"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function empty(str) {
  if (
    typeof str == "undefined" ||
    !isNaN(str) ||
    str.length === 0 ||
    str === "" ||
    !isNaN(str[0])
  ) {
    return true;
  } else {
    return false;
  }
}

let money,
  start = function () {
    do {
      money = prompt("Ваш месячный доход?", 50000);
    } while (!isNumber(money));
  };
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный источник заработка?")) {
      let itemIncome;
      do {
        itemIncome = prompt(
          "Какой у вас есть дополнительный заработок?",
          "Таксую"
        );
      } while (empty(itemIncome));
      let cashIncome;
      do {
        cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses;
    do {
      addExpenses = prompt("Перечислите возможные расходы через запятую");
    } while (empty(addExpenses));

    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let key;
    for (let i = 0; i < 3; i++) {
      do {
        key = prompt("Введите обязательную статью расходов");
      } while (empty(key));
      do {
        appData.expenses[key] = +prompt("Во сколько это обойдется?");
      } while (!isNumber(appData.expenses[key]));
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
      console.log("Цель будет достигнута за: " + richTarget + " месяцев");
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
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = +prompt("какой годовой процент?", "10");
      } while (!isNumber(appData.percentDeposit));
      {
        do {
          appData.moneyDeposit = +prompt("Какая сумма заложена?", 10000);
        } while (!isNumber(appData.moneyDeposit));
      }
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log("Расходы за месяц: ", appData.budgetMonth);
appData.getTargetMonth();
appData.getStatusIncome();

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + " - " + appData[key]
  );
}
appData.getInfoDeposit();
console.log(
  appData.percentDeposit,
  appData.moneyDeposit,
  appData.calcSavedMoney()
);
