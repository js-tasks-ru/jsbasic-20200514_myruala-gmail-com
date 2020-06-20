/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
const salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(sal) {
  let sum = 0;
  for (const key in sal) {
    if (typeof sal[key] === "number") {
      sum = sum + sal[key];
    }
  }
  return sum;
}
console.log(sumSalary(salaries));

