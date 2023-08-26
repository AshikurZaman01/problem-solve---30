// write a arrow function where it will do the following : x²
// (a) square each array element
// (b) calculate the sum of the square elements
// (b) Return the average of the sum of the square elements

const arr = [9, 22, 12, 65, 23, 7 ,5, 34 , 50 ]
let sum = 0;

const square = arr.map((x) => x*x);

for (const x of square) {
    sum = sum + x;
}

const avg = sum / square.length;
console.log(avg.toFixed(2))


