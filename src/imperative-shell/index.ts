import { add, multiply, divide, subtract, incrementOf10, addThenMultiply, calculator, modulo, isOdd, isEven, square, cube, composeNewMathOperation } from '../functional-core/functions';
import { fold } from 'fp-ts/Either';

// Example usage of the functions in an imperative style
console.log("Imperative Shell Example:");

const a = 6;
const b = 3;
const c = 4;

console.log(`Adding ${a} and ${b}: ${add(a)(b)}`);
console.log(`Multiplying ${a} and ${b}: ${multiply(a)(b)}`);
console.log(`Subtracting ${b} from ${a}: ${subtract(a)(b)}`);
console.log(`Incrementing ${b} by 10: ${incrementOf10(b)}`);
console.log(`Adding ${a} and ${b}, then multiplying by ${c}: ${addThenMultiply(a, b, c)}`);

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

console.log(`Modulo ${a} by ${b}: ${modulo(a)(b)}`);
console.log(`Is ${a} odd? ${isOdd(a)}`);
console.log(`Is ${a} even? ${isEven(a)}`);
console.log(`Square of ${b}: ${square(b)}`);
console.log(`Cube of ${b}: ${cube(b)}`);

const composedOperation = composeNewMathOperation(add, multiply);
console.log(`Composed operation (add and multiply) with ${a} and ${b}: ${composedOperation(a)(b)}`);

