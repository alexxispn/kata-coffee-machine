import { DrinkMaker } from "./DrinkMaker.js";

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private drinkType: string = ""

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;
  }

  selectCoffee() {
    this.drinkType = "C";
  }

  makeDrink() {
    this.drinkMaker.execute(`${this.drinkType}::`);
  }


  selectTea() {
    this.drinkType = "T"
  }

  selectChocolate() {
    this.drinkType = "H"
  }
}
