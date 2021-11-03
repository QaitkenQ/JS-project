
let money = +prompt("Please input your budget for the month", ''),
    time = prompt('Please input the DATE YYYY-MM-DD', '');

let appData={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

// let i = 0
//     while (i<2) {
//         let a = prompt ("Please input a mandatory expense item for the month", '' ),
//         b = prompt ("How much will it cost?", '');
//         i++   
//     }
   
// let i = 0
// do {let a = prompt ("Please input a mandatory expense item for the month", '' ),
//    b = prompt ("How much will it cost?", '');
//         i++   
//     }
//     while (i <2);


for (let i=0; i<2; i++) {
    let a = prompt ("Please input a mandatory expense item for the month", '' ),
        b = prompt ("How much will it cost?", '');


    if ((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null && a!= '' && b!= '' && a.length <50) {
    console.log ("done");
    appData.expenses [a] = b;
    } else {
        break
    }
}
appData.moneyPerDay = appData.budget / 30;

alert("Budget per day:" + appData.moneyPerDay );

if(appData.moneyPerDay <100) {
    console.log("Minimal Cash level");
} else if(appData.moneyPerDay >100 && appData.moneyPerDay < 500) {
    console.log("Medium Cash level");
} else if(appData.moneyPerDay >500) {
        console.log("High Cash level");
} else {
        console.log("UNKNOWN ERROR");        
}

