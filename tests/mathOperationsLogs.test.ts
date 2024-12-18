import { add, multiply, divide, subtract, incrementOf10, addThenMultiply, calculator, modulo, isOdd, isEven, square, cube, composeNewMathOperation,isGeometricShape, calculateArea, calculateExtendedArea, Rectangle, Circle, TriangleIsocele, TriangleRectangle, TriangleEquilateral } from '../src/functional-core/functions';
import { fold } from 'fp-ts/Either';

console.log("============ question 1 =========");
console.log(add(2)(3)); // 5
console.log(multiply(2)(3)); // 6
console.log(subtract(5)(3)); // 2
console.log(incrementOf10(5)); // 15
console.log(addThenMultiply(2, 3, 4)); // (2 + 3) * 4 = 20

console.log("============ question 2 =========");
// Test calculator function
console.log(calculator(add, 2, 3)); // 5
console.log(calculator(multiply, 2, 3)); // 6
console.log(calculator(subtract, 5, 3)); // 2

console.log("============ question 3 =========");
// Test modulo function
console.log(modulo(10)(3)); // 1

console.log("============ question 4 =========");
// Test isOdd and isEven functions
console.log(isOdd(3)); // true
console.log(isOdd(4)); // false
console.log(isEven(3)); // false
console.log(isEven(4)); // true

console.log("============ question 5 =========");
// Test square and cube functions
console.log(square(3)); // 9
console.log(square(4)); // 16
console.log(cube(2)); // 8
console.log(cube(3)); // 27

console.log("============ question 6 =========");
// Test divide function with Either monad
const result1 = divide(6)(3);
const result2 = divide(6)(0);

const handleResult = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);

console.log(handleResult(result1)); // Result: 2
console.log(handleResult(result2)); // Error: Division by zero is not allowed

console.log("============ question 7 =========");
// Test composeNewMathOperation function
const composedOperation = composeNewMathOperation(add, multiply);
console.log(composedOperation(2)(3)); // (2 + 2) * 2 = 8

console.log("============ question 8 =========");
// Test divide function with Either monad
const divideResult1 = divide(6)(3);
const divideResult2 = divide(6)(0);

const handleDivideResult = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);

console.log(handleDivideResult(divideResult1)); // Result: 2
console.log(handleDivideResult(divideResult2)); // Error: Division by zero is not allowed

console.log("============ question 9 =========");
// Test isGeometricShape function
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 5 };
const circle: Circle = { kind: 'circle', radius: 7 };
console.log(isGeometricShape(rectangle)); // true
console.log(isGeometricShape(circle)); // true
const invalidShape = { kind: 'triangle', base: 5, height: 10 };
console.log(isGeometricShape(invalidShape)); // false

console.log("============ question 10 =========");
// Test calculateArea function
console.log(calculateArea(rectangle)); // 50
console.log(calculateArea(circle)); // approximately 153.94

// Test calculateExtendedArea function
const triangleIsocele: TriangleIsocele = { kind: 'triangle', base: 10, height: 5 };
const triangleRectangle: TriangleRectangle = { kind: 'triangle', base: 10, height: 5 };
const triangleEquilateral: TriangleEquilateral = { kind: 'triangle', side: 10 };
console.log(calculateExtendedArea(triangleIsocele)); // 25
console.log(calculateExtendedArea(triangleRectangle)); // 25
console.log(calculateExtendedArea(triangleEquilateral)); // approximately 43.30
