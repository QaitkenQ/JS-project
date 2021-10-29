
let money = prompt("Please input your budget for the month", ''),
    time = prompt('Please input the DATE YYYY-MM-DD', '');

let appData={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

let a1 = prompt ("Please input a mandatory expense item for the month", '' ),
    a2 = prompt ("How much will it cost?", ''),
    a3 = prompt ("Please input a mandatory expense item for the month", '' ),
    a4 = prompt ("How much will it cost?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

