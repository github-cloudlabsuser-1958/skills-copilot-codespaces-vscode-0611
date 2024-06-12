const Calculator = require('./Calculator'); // Assuming the Calculator class is exported from the file

describe('Calculator', () => {
    describe('divide', () => {
        let calculator;

        beforeEach(() => {
            calculator = new Calculator();
        });

        test('correctly divides the current result by a given number', () => {
            calculator.result = 10;
            expect(calculator.divide(2)).toBe(5);
        });

        test('throws an error when attempting to divide by zero', () => {
            calculator.result = 10;
            expect(() => calculator.divide(0)).toThrow('Cannot divide by zero');
        });

        test('correctly updates the result property', () => {
            calculator.result = 10;
            calculator.divide(2);
            expect(calculator.result).toBe(5);
        });
    });
});