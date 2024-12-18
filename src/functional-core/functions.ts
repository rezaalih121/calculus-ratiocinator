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

// Define types for geometric shapes
type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

type Circle = {
  kind: 'circle';
  radius: number;
};

// Define a union type for geometric shapes
type GeometricShape = Rectangle | Circle;

// Type guard to check if an argument is a GeometricShape
const isGeometricShape = (shape: any): shape is GeometricShape => {
  return (
    (shape.kind === 'rectangle' && typeof shape.width === 'number' && typeof shape.height === 'number') ||
    (shape.kind === 'circle' && typeof shape.radius === 'number')
  );
};

// Function to calculate the area of a geometric shape
const calculateArea = (shape: GeometricShape): number => {
  switch (shape.kind) {
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    default:
      throw new Error('Unknown shape');
  }
};

// Define types for triangles
type Triangle = {
  kind: 'triangle';
};

type TriangleIsocele = Triangle & {
  base: number;
  height: number;
};

type TriangleRectangle = Triangle & {
  base: number;
  height: number;
};

type TriangleEquilateral = Triangle & {
  side: number;
};

// Extend the GeometricShape union type to include triangles
type ExtendedGeometricShape = GeometricShape | TriangleIsocele | TriangleRectangle | TriangleEquilateral;

// Adapt the calculateArea function to handle triangles
const calculateExtendedArea = (shape: ExtendedGeometricShape): number => {
  switch (shape.kind) {
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    case 'triangle':
      if ('base' in shape && 'height' in shape) {
        return (shape.base * shape.height) / 2;
      } else if ('side' in shape) {
        return (Math.sqrt(3) / 4) * shape.side * shape.side;
      } else {
        throw new Error('Unknown triangle type');
      }
    default:
      throw new Error('Unknown shape');
  }
};

// Export functions and types
export { add, multiply, divide, subtract, incrementOf10, addThenMultiply, calculator, modulo, isOdd, isEven, square, cube, composeNewMathOperation, isGeometricShape, calculateArea, calculateExtendedArea, UnaryMathOperation, UnaryMathOperationsAggregator, TernaryMathOperationFn, GeometricShape, Rectangle, Circle, Triangle, TriangleIsocele, TriangleRectangle, TriangleEquilateral, ExtendedGeometricShape };
