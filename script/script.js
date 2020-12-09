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
  incomeItems = document.querySelectorAll(".income-items"),
  monthIncome = document.getElementsByClassName("budget_month-value"),
  dayBudget = document.getElementsByClassName("budget_day-value"),
  monthExpenses = document.getElementsByClassName("expenses_month-value"),
  possibleIncome = document.getElementsByClassName("additional_income-value"),
  possibleExpenses = document.getElementsByClassName(
    "additional_expenses-value"
  ),
  incomePeriodValue = document.getElementsByClassName("income_period-value"),
  targetMonth = document.getElementsByClassName("target_month-value"),
  incomeSum = document.querySelector(".salary-amount"),
  possibleIncomeField = document.querySelector(".income-title"),
  extraIncome = document.querySelectorAll(".additional_income-item"),
  expensesField = document.querySelector(".expenses-title"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  expensesName = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  range = document.querySelector(".period-select"),
  incomeItem = document.querySelectorAll(".income-items");

let appData = {
  income: {},
  incomeMonth: 0,
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
    appData.budget = +incomeSum.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();

    appData.showResult();
  },
  showResult: function () {
    monthIncome[0].value = appData.budgetMonth;
    dayBudget[0].value = appData.budgetDay;
    monthExpenses[0].value = appData.expensesMonth;
    possibleExpenses[0].value = appData.addExpenses.join(", ");
    possibleIncome[0].value = appData.addIncome.join(", ");
    targetMonth[0].value = appData.getTargetMonth();
    incomePeriodValue[0].value = appData.calcPeriod();
  },
  addExpensesBlock: function () {
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
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value;
      let cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        appData.income[itemIncome] = cashIncome;
      }
    });
    //if (confirm("Есть ли у вас дополнительный источник заработка?")) {
    // do {
    //   itemIncome = prompt(
    //     "Какой у вас есть дополнительный заработок?",
    //     "Таксую"
    //   );
    // } while (empty(itemIncome));

    //     do {
    //       cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
    //     } while (!isNumber(cashIncome));
    //     appData.income[itemIncome] = cashIncome;
    //   }
    //   for (let key in appData.income) {
    //     appData.incomeMonth += +appData.income[key];
    //   }
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
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function () {
    return targetAmount.value / appData.budgetMonth;
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
  calcPeriod: function () {
    return appData.budgetMonth * range.value;
  },
};

calculate.addEventListener("click", appData.start);

secondPlus.addEventListener("click", appData.addExpensesBlock);

appData.getTargetMonth();

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + " - " + appData[key]
  );
}
appData.getInfoDeposit();
