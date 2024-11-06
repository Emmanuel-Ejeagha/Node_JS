const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

console.log(sum(3, 7));

const add = function sun(num1, num2) {
  return num1 + num2;
};

function divide(x, y) {
  if (y === 0) {
    throw new Error("Cannot divide by Zero");
  }
  return x / y;
}

module.exports = { divide };
