const argumentList = process.argv.slice(2);
let sum = 0;

let solution = argumentList.forEach((value) => {
  // convert to a number
  sum += Number(value);
});

console.log("The sum = " + sum);

