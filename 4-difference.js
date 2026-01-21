'use strict';

const difference = (array1, array2) => {
  return array1.filter(item => !array2.includes(item));
};

// Тестування 1: масив чисел
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result1 = difference(array1, array2);
console.log(result1);
// Result: [7, -2, 5]

// Тестування 2: масив рядків
const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array3, array4);
console.log(result2);
// Result: ['Beijing']
