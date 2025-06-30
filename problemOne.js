class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  operate(operation) {
    switch (operation.toLowerCase()) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        return this.b !== 0 ? this.a / this.b : "Cannot divide by zero";
      default:
        return "Invalid operation";
    }
  }
}

const calc = new Calculator(50, 10);
console.log("Add:", calc.operate("add"));         
console.log("Subtract:", calc.operate("subtract")); 
console.log("Multiply:", calc.operate("multiply"));
console.log("Divide:", calc.operate("divide"));   
