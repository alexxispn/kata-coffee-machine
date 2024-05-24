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

  makeDrink(): void {
    if (this.drinkType === "") {
      this.drinkMaker.execute(`M:drink-has-not-been-selected`);
      return
    }

    if (this.sugar > 0) {
      this.drinkMaker.execute(`${this.drinkType}:${this.sugar}:0`);
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
    this.sugar += 1
  }
}
