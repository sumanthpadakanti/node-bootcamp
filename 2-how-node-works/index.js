const Calculator = require("./starter/modules");

const cal = new Calculator();
console.log("add", cal.add(4, 5));
console.log("multiply", cal.multiply(4, 5));

const { add, multiply } = require("./starter/exports");
console.log("add", add(4, 5));
console.log("multiply", multiply(4, 5));
