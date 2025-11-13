import { add, subtract } from './addSubtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const resultField = document.getElementById('result');
const num1Field = document.getElementById('num1');
const num2Field = document.getElementById('num2');
const operation = document.getElementById('operation');

calculateBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Field.value);
  const num2 = parseFloat(num2Field.value);
  let result;

  switch (operation.value) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
  }

  resultField.value = `Result: ${result}`;
});

clearBtn.addEventListener('click', () => {
  num1Field.value = '';
  num2Field.value = '';
  resultField.value = '';
});
