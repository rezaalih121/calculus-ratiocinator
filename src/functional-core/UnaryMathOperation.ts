// Define a common type for unary math operations
type UnaryMathOperation = (a: number) => (b: number) => number;

// Define a common type for ternary math operations 
type TernaryMathOperationFn = (x: number, y: number, z: number) => number;

// Define a common type for unary math operations aggregator 
type UnaryMathOperationsAggregator = (a: number) => UnaryMathOperation;

// Add function
const add: UnaryMathOperation = (a) => (b) => a + b;

// Multiply function
const multiply: UnaryMathOperation = (a) => (b) => a * b;

// Divide function
const divide: UnaryMathOperation = (a) => (b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

// Subtract function
const subtract: UnaryMathOperation = (a) => (b) => a - b;

// Increment of 10 function using partial application
const incrementOf10 = add(10);

// AddThenMultiply function
const addThenMultiply: TernaryMathOperationFn = (x, y, z) => multiply(add(x)(y))(z);

// Calculator function 
const calculator = (f: UnaryMathOperation, x: number, y: number): number => f(x)(y);

// Modulo function 
const modulo: UnaryMathOperationsAggregator = (a) => (b) => a % b;


// isOdd function 
const isOdd = modulo(2); // isEven function 
const isEven = (x: number) => !isOdd(x);


// Square function
const square = (x: number): number => multiply(x)(x);

// Cube function
const cube = (x: number): number => multiply(multiply(x)(x))(x);


// Export functions
export { add, multiply, divide, subtract ,incrementOf10 ,addThenMultiply,calculator, modulo, isOdd, isEven ,square , cube , UnaryMathOperation , UnaryMathOperationsAggregator, TernaryMathOperationFn};
