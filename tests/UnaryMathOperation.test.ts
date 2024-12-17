import { add, multiply, divide, subtract , incrementOf10 ,addThenMultiply , calculator, modulo, isOdd, isEven , square , cube } from '../src/functional-core/UnaryMathOperation';

console.log("================Etape 2 ================");

console.log(add(2)(3)); // 5
console.log(multiply(2)(3)); // 6
console.log(divide(6)(3)); // 2
console.log(subtract(5)(3)); // 2


console.log("================Etape 3 ================");


console.log(add(2)(3)); // 5
console.log(incrementOf10(5)); // 15
console.log(incrementOf10(0)); // 10
console.log(incrementOf10(-10)); // 0

console.log("================Etape 4 ================");

console.log(addThenMultiply(2, 3, 4)); // (2 + 3) * 4 = 20 
console.log(addThenMultiply(1, 1, 1)); // (1 + 1) * 1 = 2

console.log("================Etape 5 ================");

// Test calculator function 
console.log(calculator(add, 2, 3)); // 5 
console.log(calculator(multiply, 2, 3)); // 6 
console.log(calculator(divide, 6, 3)); // 2 
console.log(calculator(subtract, 5, 3)); // 2

// Test division by zero
try {
  console.log(divide(6)(0));
  console.log(calculator(divide, 6, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed
}

console.log("================Etape 6 ================");

// Test modulo function 
console.log(modulo(10)(3)); // 1 
// Test isOdd and isEven functions 
console.log(isOdd(3)); // true 
console.log(isOdd(4)); // false 
console.log(isEven(3)); // false 
console.log(isEven(4)); // true

// Test square and cube functions
console.log("================Etape 7 ================");

console.log(square(3)); // 9
console.log(square(4)); // 16
console.log(cube(2)); // 8
console.log(cube(3)); // 27