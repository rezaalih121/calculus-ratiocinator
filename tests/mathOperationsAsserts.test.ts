import { add, multiply, divide, subtract, incrementOf10, addThenMultiply, calculator, modulo, isOdd, isEven, square, cube, composeNewMathOperation } from '../src/functional-core/functions';
import { fold } from 'fp-ts/Either';
import assert from 'assert';

console.log("============ question 1 =========");
console.log("Testing add function with inputs 2 and 3, expected output: 5");
assert.strictEqual(add(2)(3), 5);
console.log("Result: Passed");

console.log("Testing multiply function with inputs 2 and 3, expected output: 6");
assert.strictEqual(multiply(2)(3), 6);
console.log("Result: Passed");

console.log("Testing subtract function with inputs 5 and 3, expected output: 2");
assert.strictEqual(subtract(5)(3), 2);
console.log("Result: Passed");

console.log("Testing incrementOf10 function with input 5, expected output: 15");
assert.strictEqual(incrementOf10(5), 15);
console.log("Result: Passed");

console.log("Testing addThenMultiply function with inputs 2, 3, and 4, expected output: 20");
assert.strictEqual(addThenMultiply(2, 3, 4), 20);
console.log("Result: Passed");

console.log("============ question 2 =========");
console.log("Testing calculator function with add operation and inputs 2 and 3, expected output: 5");
assert.strictEqual(calculator(add, 2, 3), 5);
console.log("Result: Passed");

console.log("Testing calculator function with multiply operation and inputs 2 and 3, expected output: 6");
assert.strictEqual(calculator(multiply, 2, 3), 6);
console.log("Result: Passed");

console.log("Testing calculator function with subtract operation and inputs 5 and 3, expected output: 2");
assert.strictEqual(calculator(subtract, 5, 3), 2);
console.log("Result: Passed");

console.log("============ question 3 =========");
console.log("Testing modulo function with inputs 10 and 3, expected output: 1");
assert.strictEqual(modulo(10)(3), 1);
console.log("Result: Passed");

console.log("============ question 4 =========");
console.log("Testing isOdd function with input 3, expected output: true");
assert.strictEqual(isOdd(3), true);
console.log("Result: Passed");

console.log("Testing isOdd function with input 4, expected output: false");
assert.strictEqual(isOdd(4), false);
console.log("Result: Passed");

console.log("Testing isEven function with input 3, expected output: false");
assert.strictEqual(isEven(3), false);
console.log("Result: Passed");

console.log("Testing isEven function with input 4, expected output: true");
assert.strictEqual(isEven(4), true);
console.log("Result: Passed");

console.log("============ question 5 =========");
console.log("Testing square function with input 3, expected output: 9");
assert.strictEqual(square(3), 9);
console.log("Result: Passed");

console.log("Testing square function with input 4, expected output: 16");
assert.strictEqual(square(4), 16);
console.log("Result: Passed");

console.log("Testing cube function with input 2, expected output: 8");
assert.strictEqual(cube(2), 8);
console.log("Result: Passed");

console.log("Testing cube function with input 3, expected output: 27");
assert.strictEqual(cube(3), 27);
console.log("Result: Passed");

console.log("============ question 6 =========");
console.log("Testing composeNewMathOperation function with add and multiply operations and inputs 2 and 3, expected output: 8");
const composedOperation = composeNewMathOperation(add, multiply);
assert.strictEqual(composedOperation(2)(3), 8); // (2 + 2) * 2 = 8
console.log("Result: Passed");

console.log("============ question 7 =========");
console.log("Testing divide function with inputs 6 and 3, expected output: Result: 2");
const result1 = divide(6)(3);
const handleResult1 = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);
assert.strictEqual(handleResult1(result1), 'Result: 2');
console.log("Result: Passed");

console.log("Testing divide function with inputs 6 and 0, expected output: Error: Division by zero is not allowed");
const result2 = divide(6)(0);
const handleResult2 = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);
assert.strictEqual(handleResult2(result2), 'Error: Division by zero is not allowed');
console.log("Result: Passed");

console.log("============ question 8 =========");
console.log("Testing divide function with inputs 6 and 3, expected output: Result: 2");
const divideResult1 = divide(6)(3);
const handleDivideResult1 = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);
assert.strictEqual(handleDivideResult1(divideResult1), 'Result: 2');
console.log("Result: Passed");

console.log("Testing divide function with inputs 6 and 0, expected output: Error: Division by zero is not allowed");
const divideResult2 = divide(6)(0);
const handleDivideResult2 = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);
assert.strictEqual(handleDivideResult2(divideResult2), 'Error: Division by zero is not allowed');
console.log("Result: Passed");
