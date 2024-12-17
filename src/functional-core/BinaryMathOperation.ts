// Define a common type for binary math operations
type BinaryMathOperation = (a: number, b: number) => number;

// Add function
const add: BinaryMathOperation = (a, b) => a + b;

// Multiply function
const multiply: BinaryMathOperation = (a, b) => a * b;

// Divide function
const divide: BinaryMathOperation = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

// Subtract function
const subtract: BinaryMathOperation = (a, b) => a - b;


// Export functions
export { add, multiply, divide, subtract, BinaryMathOperation };