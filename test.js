class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this.result;
    }

    subtract(number) {
        this.result -= number;
        return this.result;
    }

    multiply(number) {
        this.result *= number;
        return this.result;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this.result;
    }

    clear() {
        this.result = 0;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.multiply(3)); // 9
console.log(calculator.divide(3)); // 3
calculator.clear();
console.log(calculator.result); // 0