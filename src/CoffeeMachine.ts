import { DrinkMaker } from "./DrinkMaker.js";

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private drinkType: string = ""
  private sugar: number = 0

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;
  }

  selectCoffee() {
    this.drinkType = "C";
  }

  makeDrink() {
    if (this.sugar > 0) {
      this.drinkMaker.execute(`${this.drinkType}:1:`);
      return;
    }
    this.drinkMaker.execute(`${this.drinkType}::`);
  }


  selectTea() {
    this.drinkType = "T"
  }

  selectChocolate() {
    this.drinkType = "H"
  }

  addSugar() {
    this.sugar = 1
  }
}
