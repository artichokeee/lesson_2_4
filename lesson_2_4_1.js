let expensesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

//Скорее всего я изначально неправильно понял задание и сделал расчет для трех лет

// let expensesMatrix = [];

// for (elementKey in expensesExamples) {
//   expensesMatrix.push(expensesExamples[elementKey].yearlyExpences);
// }

// let expensesSum = 0;

// for (let i = 0; i < expensesMatrix.length; i++) {
//   for (let j = 0; j < expensesMatrix[i].length; j++) {
//     if (expensesMatrix[i][j] > 1000) {
//       expensesSum += expensesMatrix[i][j];
//     }
//   }
// }

// console.log(expensesSum);

//Вот для одного массива

let yearlyExpences1 = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];

function expensesCalculation (array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 1000) {
          sum += array[i];
        }
      }
}




// console.log(expensesCalculation(expensesExamples));














