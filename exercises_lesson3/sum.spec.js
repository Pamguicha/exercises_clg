const { sum } = require('./sum');

describe("Unit tests for checking summation fuction", () => {
  it("should return 7", () => {
    sumInput = sum(2,5);
    expect(sumInput).toBe(7);
  });

  it("should return false", () => {
    finalInput = sum(2, '5');
    expect(finalInput).toBe(false);
  });
});