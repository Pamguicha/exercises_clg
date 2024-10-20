const checkNegative = (n) => {
  if(n < 0) {
    throw new Error("Negative input");
  }
  return n;
}
module.exports = checkNegative;
