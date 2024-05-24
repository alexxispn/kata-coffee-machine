import { DrinkMaker } from "./DrinkMaker.js";

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;

  }

  selectCoffee() {

  }

  makeDrink() {
    this.drinkMaker.execute("C::");
  }

  selectTea() {

  }
}
