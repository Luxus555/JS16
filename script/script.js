"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function empty(str) {
  if (
    typeof str === "undefined" ||
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

let calculate = document.getElementById("start"),
  buttonPlus = document.getElementsByTagName("button"),
  firstPlus = buttonPlus[0],
  secondPlus = buttonPlus[1],
  checkBox = document.querySelector("#deposit-check"),
  incomeField = document.querySelectorAll(".income-items"),
  monthIncome = document.getElementsByClassName("budget_month-value"),
  dayBudget = document.getElementsByClassName("budget_day-value"),
  monthExpenses = document.getElementsByClassName("expenses_month-value"),
  possibleIncome = document.getElementsByClassName("additional_income-value"),
  possibleExpenses = document.getElementsByClassName(
    "additional_expenses-value"
  ),
  savings = document.getElementsByClassName("income_period-value"),
  targetMonth = document.getElementsByClassName("target_month-value"),
  incomeSum = document.querySelector(".salary-amount"),
  possibleIncomeField = document.querySelector(".income-title"),
  possibleIncomeSum = document.querySelector(".income-amount"),
  extraIncome = document.querySelectorAll(".additional_income-item"),
  expensesField = document.querySelector(".expenses-title"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  expensesName = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  range = document.querySelector(".period-select");

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 3,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    if (incomeSum.value === "") {
      alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
      return;
    }
    appData.budget = incomeSum.value;
    appData.getExpenses();

    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.showResult();
  },
  showResult: function () {
    monthIncome[0].value = appData.budgetMonth;
    dayBudget[0].value = appData.budgetDay;
    monthExpenses[0].value = appData.expensesMonth;
    possibleExpenses[0].value = appData.addExpenses.join(", ");
    possibleIncome[0].value = appData.addIncome.join(", ");
    targetMonth[0].value = appData.getTargetMonth();
  },
  addExpensesBlock: function () {
    console.log(expensesItems.parentNode);
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, secondPlus);
    expensesItems = document.querySelectorAll(".expenses-items");

    if (expensesItems.length === 3) {
      secondPlus.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getAddExpenses: function () {
    let addExpenses = expensesName.value.split(", ");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    extraIncome.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },
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

    const sentence = addExpenses.split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    }
    sentence.join(" ");

    console.log(sentence);

    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    let key;
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
    let richTarget = Math.ceil(targetAmount.value / appData.budgetMonth);
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

calculate.addEventListener("click", appData.start);

secondPlus.addEventListener("click", appData.addExpensesBlock);

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
