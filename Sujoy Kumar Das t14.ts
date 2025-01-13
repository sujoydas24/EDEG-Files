
type Point = {
  x: number;
  y: number;
};

const myPoint: Point = { x: 10, y: 20 };

const anotherPoint: Point = { x: 5, y: 15 };

function printPoint(p: Point): void {
    console.log(`Point: (${p.x}, ${p.y})`);
}

printPoint(myPoint); 
printPoint(anotherPoint); 



function add(a: number, b: number): number {
  return a + b;
}

const sum1 = add(5, 3);
console.log(`The sum is: ${sum1}`); 

const sum2 = add(10, -2);
console.log(`The sum is: ${sum2}`); 

const multiply = (x: number, y: number): number => x * y;

const product = multiply(4, 6);
console.log(`The product is: ${product}`); 