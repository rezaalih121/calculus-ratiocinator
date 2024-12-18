import { add, multiply, divide, subtract, incrementOf10, addThenMultiply, calculator, modulo, isOdd, isEven, square, cube, composeNewMathOperation, isGeometricShape , calculateArea, calculateExtendedArea } from '../functional-core/functions';
import { fold } from 'fp-ts/Either';

console.log("Imperative Shell Example:");

const a = 6;
const b = 3;
const c = 4;

console.log("============ question 1 =========");
console.log(`Adding ${a} and ${b}: ${add(a)(b)}`);
console.log(`Multiplying ${a} and ${b}: ${multiply(a)(b)}`);
console.log(`Subtracting ${b} from ${a}: ${subtract(a)(b)}`);
console.log(`Incrementing ${b} by 10: ${incrementOf10(b)}`);
console.log(`Adding ${a} and ${b}, then multiplying by ${c}: ${addThenMultiply(a, b, c)}`);

console.log("============ question 2 =========");
console.log(`Calculator add operation with ${a} and ${b}: ${calculator(add, a, b)}`);
console.log(`Calculator multiply operation with ${a} and ${b}: ${calculator(multiply, a, b)}`);
console.log(`Calculator subtract operation with ${a} and ${b}: ${calculator(subtract, a, b)}`);

console.log("============ question 3 =========");
console.log(`Modulo ${a} by ${b}: ${modulo(a)(b)}`);

console.log("============ question 4 =========");
console.log(`Is ${a} odd? ${isOdd(a)}`);
console.log(`Is ${a} even? ${isEven(a)}`);

console.log("============ question 5 =========");
console.log(`Square of ${b}: ${square(b)}`);
console.log(`Cube of ${b}: ${cube(b)}`);

console.log("============ question 6 =========");
const composedOperation = composeNewMathOperation(add, multiply);
console.log(`Composed operation (add and multiply) with ${a} and ${b}: ${composedOperation(a)(b)}`);

console.log("============ question 7 =========");
const divideResult = divide(a)(b);
const handleDivideResult = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);
console.log(`Dividing ${a} by ${b}: ${handleDivideResult(divideResult)}`);

const divideByZeroResult = divide(a)(0);
const handleDivideByZeroResult = fold(
  (error: string) => `Error: ${error}`,
  (value: number) => `Result: ${value}`
);
console.log(`Dividing ${a} by 0: ${handleDivideByZeroResult(divideByZeroResult)}`);

console.log("============ question 8 =========");
console.log(`Dividing ${a} by ${b}: ${handleDivideResult(divideResult)}`);
console.log(`Dividing ${a} by 0: ${handleDivideByZeroResult(divideByZeroResult)}`);

console.log("============ question 9 =========");
const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 5 };
const circle: Circle = { kind: 'circle', radius: 7 };
console.log(`Is rectangle a GeometricShape? ${isGeometricShape(rectangle)}`);
console.log(`Is circle a GeometricShape? ${isGeometricShape(circle)}`);
const invalidShape = { kind: 'triangle', base: 5, height: 10 };
console.log(`Is invalidShape a GeometricShape? ${isGeometricShape(invalidShape)}`);

console.log("============ question 10 =========");
console.log(`Area of rectangle: ${calculateArea(rectangle)}`);
console.log(`Area of circle: ${calculateArea(circle)}`);

const triangleIsocele: TriangleIsocele = { kind: 'triangle', base: 10, height: 5 };
const triangleRectangle: TriangleRectangle = { kind: 'triangle', base: 10, height: 5 };
const triangleEquilateral: TriangleEquilateral = { kind: 'triangle', side: 10 };
console.log(`Area of triangleIsocele: ${calculateExtendedArea(triangleIsocele)}`);
console.log(`Area of triangleRectangle: ${calculateExtendedArea(triangleRectangle)}`);
console.log(`Area of triangleEquilateral: ${calculateExtendedArea(triangleEquilateral)}`);
