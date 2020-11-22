let money = 2000;
let income = "Frilance";
let addExpenses = "Internet, House, Electricity";
let deposit = true;
let mission = 10000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев.");
console.log("Цель - заработать: " + mission + " фунтов");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(" "));

let budgetDay = money / 30;
console.log(budgetDay);

let num = 266219,
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

alert(Itogo);
