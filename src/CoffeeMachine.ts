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
    this.sugar = 0;
  }

  makeDrink(): void {
    this.drinkMaker.execute(this.createCommand());
  }

  private createCommand() {
    if (this.drinkType === "") {
      return `M:drink-has-not-been-selected`
    }

    if (this.sugar > 0) {
      return `${this.drinkType}:${this.sugar}:0`
    }

    return `${this.drinkType}::`
  }


  selectTea() {
    this.drinkType = "T"
    this.sugar = 0;
  }

  selectChocolate() {
    this.drinkType = "H"
  }

  addSugar() {
    this.sugar += 1
  }
}
