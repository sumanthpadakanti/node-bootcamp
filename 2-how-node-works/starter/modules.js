// option 1 of declaring class and assigning to module exports

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
// }
// module.exports = Calculator;

// option 2 of assigning class to module.exports
module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
};
