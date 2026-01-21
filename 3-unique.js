'use strict';

const unique = (array) => {
  return [...new Set(array)];
};

// Тестування 1: масив чисел з дублікатами
const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);
// Result: [2, 1, 3]

// Тестування 2: масив рядків з дублікатами
const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);
// Result: ['top', 'bottom', 'left']
