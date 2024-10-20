const myArgv = process.argv.slice(2);
console.log('myArgv:', myArgv);

myArgv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
