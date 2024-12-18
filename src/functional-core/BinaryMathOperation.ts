import { Either, left, right } from 'fp-ts/Either';

// Define a common type for unary math operations
type UnaryMathOperation = (a: number) => (b: number) => number;

// Define a common type for unary math operations aggregator
type UnaryMathOperationsAggregator = (
  ...fns: UnaryMathOperationFn[]
) => (x: number) => (y: number) => number;

// Define a common type for unary math operations aggregator with Either
type UnaryMathOperationFn = (a: number) => (b: number) => number;

// Compose new math operation function
const composeNewMathOperation: UnaryMathOperationsAggregator =
  (...fns: UnaryMathOperationFn[]) =>
  (x: number) =>
  (y: number = x) =>
    fns.reduce((acc, curr: UnaryMathOperationFn) => curr(acc)(x), x);

// Add function
const add: UnaryMathOperation = (a) => (b) => a + b;

// Multiply function
const multiply: UnaryMathOperation = (a) => (b) => a * b;

// Divide function using Either monad
const divide = (a: number) => (b: number): Either<string, number> => {
  if (b === 0) {
    return left("Division by zero is not allowed");
  }
  return right(a / b);
};

// Subtract function
const subtract: UnaryMathOperation = (a) => (b) => a - b;

// Increment of 10 function using partial application
const incrementOf10 = add(10);

// AddThenMultiply function
type TernaryMathOperationFn = (x: number, y: number, z: number) => number;
const addThenMultiply: TernaryMathOperationFn = (x, y, z) => multiply(add(x)(y))(z);

// Calculator function
const calculator = (f: UnaryMathOperation, x: number, y: number): number => f(x)(y);

// Modulo function
const modulo: UnaryMathOperationsAggregator = (a) => (b) => a % b;

// isOdd function
const isOdd = modulo(2);

// isEven function
const isEven = (x: number) => !isOdd(x);

// Square function
const square = (x: number): number => multiply(x)(x);

// Cube function
const cube = (x: number): number => multiply(multiply(x)(x))(x);

// Export functions
export { add, multiply, divide, subtract, incrementOf10, addThenMultiply, calculator, modulo, isOdd, isEven, square, cube, composeNewMathOperation, UnaryMathOperation, UnaryMathOperationsAggregator, TernaryMathOperationFn };
