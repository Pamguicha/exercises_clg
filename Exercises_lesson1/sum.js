/*simple mathematics program in node.js */
//Fetch the arguments passed in the CLI
//Store them in variables
//Add the variables
//Print the result exam: $node sum.js 20 10


const myArgv = process.argv.slice(2);
let sum = 0;

myArgv.forEach((val) => {
  sum+= Number(val); 

});


console.log(`The sum of the numbers are ${sum}`);


