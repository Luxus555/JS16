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
  cancel = document.getElementById("cancel"),
  buttonPlus = document.getElementsByTagName("button"),
  firstPlus = buttonPlus[0],
  secondPlus = buttonPlus[1],
  checkBox = document.querySelector("#deposit-check"),
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
  incomeTitle = document.querySelector(".income-title"),
  incomeAmount = document.querySelector(".income-amount"),
  extraIncome = document.querySelectorAll(".additional_income-item"),
  expensesField = document.querySelector(".expenses-title"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  expensesName = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  range = document.querySelector(".period-select"),
  periodAmount = document.querySelector(".period-amount"),
  incomeItems = document.querySelectorAll(".income-items");

const AppData = function () {
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.period = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.start = function () {
  this.budget = +incomeSum.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();

  this.showResult();
  //querySelectorAll('.data input[type = text]') ищет все инпуты с типой text? тут немного знания верстки нужны, при этом он все другие инпуты не трогоет  значит твой type=renge будет не задизейблит
  let inputData = document.querySelectorAll(".data input[type = text]");
  firstPlus.setAttribute("disabled", "true");
  secondPlus.setAttribute("disabled", "true");
  inputData.forEach((item) => item.setAttribute("disabled", "true"));
  calculate.style.display = "none";
  cancel.style.display = "block";
};
AppData.showResult = function () {
  monthIncome[0].value = this.budgetMonth;
  dayBudget[0].value = this.budgetDay;
  monthExpenses[0].value = this.expensesMonth;
  possibleExpenses[0].value = this.addExpenses.join(", ");
  possibleIncome[0].value = this.addIncome.join(", ");
  targetMonth[0].value = this.getTargetMonth();
  incomePeriodValue[0].value = this.calcPeriod();

  range.addEventListener("input", (event) => {
    event.preventDefault();
    incomePeriodValue[0].value = this.calcPeriod();
  });
};
AppData.prototype.addExpensesBlock = function () {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, secondPlus);
  expensesItems = document.querySelectorAll(".expenses-items");

  if (expensesItems.length === 3) {
    secondPlus.style.display = "none";
  }
};
AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, firstPlus);
  incomeItems = document.querySelectorAll(".income-items");

  if (incomeItems.length === 3) {
    firstPlus.style.display = "none";
  }
};
AppData.prototype.getExpenses = function () {
  const _this = this;
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector(".expenses-title").value;
    let cashExpenses = item.querySelector(".expenses-amount").value;
    if (itemExpenses !== "" && cashExpenses !== "") {
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.getIncome = function () {
  const _this = this;
  incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector(".income-title").value;
    let cashIncome = item.querySelector(".income-amount").value;
    if (itemIncome !== "" && cashIncome !== "") {
      _this.income[itemIncome] = cashIncome;
    }

    for (let key in _this.income) {
      _this.incomeMonth += +_this.income[key];
    }
  });
};
AppData.prototype.getAddExpenses = function () {
  const _this = this;
  let addExpenses = expensesName.value.split(", ");
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== "") {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  const _this = this;
  extraIncome.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== "") {
      _this.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + (this.incomeMonth - this.expensesMonth);
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
  return Math.ceil(targetAmount.value / this.budgetMonth);
};
AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
    console.log("У вас средний уровень дохода");
  } else if (this.budgetDay < 600 && this.budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  }
};
AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    do {
      this.percentDeposit = +prompt("какой годовой процент?", "10");
    } while (!isNumber(this.percentDeposit));
    {
      do {
        this.moneyDeposit = +prompt("Какая сумма заложена?", 10000);
      } while (!isNumber(this.moneyDeposit));
    }
  }
};
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * range.value;
};
AppData.prototype.reset = function () {
  const inputTextData = document.querySelectorAll(".data input[type = text]"),
    resultInputAll = document.querySelectorAll(".result input[type = text]");

  inputTextData.forEach((elem) => {
    elem.value = "";
    elem.removeAttribute("disabled");
    range.value = "0";
    periodAmount.innerHTML = range.value;
  });
  resultInputAll.forEach((elem) => {
    elem.value = "";
  });
  this.budget = 0;
  this.income = {};
  this.addIncome = [];
  this.Expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.depositSum = 0;
  this.depositPercent = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.incomeMonth = 0;
  let inputData = document.querySelectorAll(".data input[type = text]");
  firstPlus.setAttribute("disabled", "false");
  secondPlus.setAttribute("disabled", "false");
  cancel.style.display = "none";
  calculate.style.display = "inline";
  inputData.forEach((item) => {
    item.removeAtrribute("disabled", "true");
  });
};
AppData.prototype.eventListeners = function () {
  calculate.addEventListener("click", (event) => {
    event.preventDefault();
    if (incomeSum.value === "") {
      alert('Поле "Месячный доход" должно быть заполнено!');
    } else {
      appData.start();
    }
  });

  firstPlus.addEventListener("click", this.addIncomeBlock);

  secondPlus.addEventListener("click", this.addExpensesBlock);

  cancel.addEventListener("click", () => {
    appData.reset();
  });

  range.addEventListener("input", (event) => {
    event.preventDefault();
    this.period = range.value;
    periodAmount.textContent = this.period;
  });

  this.getTargetMonth();

  for (let key in this) {
    console.log(
      "Наша программа включает в себя данные: " + key + " - " + this[key]
    );
  }
  this.getInfoDeposit();
};

const appData = new AppData();

console.log(appData);
