const {Calculator} = require("./calculator");

let calculator

beforeEach(() => {
  calculator = new Calculator();
})


describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = calculator.sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    
  });

  test.skip('can add two negative numbers', () => {
    
  });

  test.skip('can add zero', () => {
    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
