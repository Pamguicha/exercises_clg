const { checkNegative} = require ('./checkNegative');
describe('exeption test', () => {
  it('should throw an exeption', () => {
    expect (
      () => checkNegative(-1)
    ).toThrow();   
  });
});