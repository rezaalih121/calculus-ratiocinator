import { add, multiply, divide, subtract } from '../src/functional-core/BinaryMathOperation';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
console.log(divide(6, 3)); // 2
console.log(subtract(5, 3)); // 2

// Test division by zero
try {
  console.log(divide(6, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed
}
