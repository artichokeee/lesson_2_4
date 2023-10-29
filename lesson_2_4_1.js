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

function calculateYearlyExpenses(index) {
    const yearlyExpences = expensesExamples[index].yearlyExpences;
    let sum = 0;
  
    for (let i = 0; i < yearlyExpences.length; i++) {
      if (yearlyExpences[i] > 1000) {
        sum += yearlyExpences[i];
      }
    }
  
    return sum;
  }

  function testCalculateYearlyExpenses() {
    expensesExamples.forEach((expenseExample, index) => {
        const calculatedSum = calculateYearlyExpenses(index);

        const expectedSums = [40590, 148200, 25709];

        if (calculatedSum === expectedSums[index]) {
            console.log(`Тест для объекта ${index} пройден.`);
        } else {
            console.log(`Тест для объекта ${index} не пройден.`);
        }
    });
}

testCalculateYearlyExpenses();
  
//Изначально неправильно понял задание и сделал расчет для трех лет

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



















