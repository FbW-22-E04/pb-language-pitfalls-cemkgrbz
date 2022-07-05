//1
// NaN: Not a Number 
//1.1

const numberCheck = 'hello';
console.log(isNaN(numberCheck)); //true

const numberCheck2 = 3;
console.log(isNaN(numberCheck2)); //false

console.log(typeof NaN) //number

//2

console.log((0.1 * 0.2).toFixed(2));

//3

console.log(Infinity / 0) //Infinity
console.log(Infinity / Infinity) //NaN
console.log(1/0) //Infinity