// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._waterAmount = value;
//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }

//   get power() {
//     return this._power;
//   }

// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// // add water
// coffeeMachine.waterAmount = 200;
// coffeeMachine.power = 450;
// console.log(coffeeMachine);



class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.setWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error