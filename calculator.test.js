const {Calculator} = require("./calculator");

let calculator

beforeEach(() => {
  calculator = new Calculator();
})


describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = calculator.sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 3900;
    const actual = calculator.sum(3000, 900);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -35;
    const actual = calculator.sum(-30, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 48;
    const actual = calculator.sum(0,48);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    const expected = 6;
    const actual = calculator.subtract(8, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    const expected = 500;
    const actual = calculator.subtract(20000, 19500);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    const expected = 10;
    const actual = calculator.subtract(-20, -30);
    expect(actual).toBe(expected);
  });

  test('can substract zero', () => {
    const expected = 45;
    const actual = calculator.subtract(45,0);
    expect(actual).toBe(expected);
  });


});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    const expected =28;
    const actual = calculator.multiply(7, 4);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    const expected = 55;
    const actual = calculator.multiply(-5,-11);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide two positive numbers', () => {
    const expected =6;
    const actual = calculator.divide(36, 6);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    const expected = 5;
    const actual = calculator.divide(-25,-5);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
