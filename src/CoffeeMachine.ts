import { DrinkMaker } from "./DrinkMaker.js";

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private drinkType: string = ""
  private selectedCoffee: boolean = false;
  private selectedChocolate: boolean = false;

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;

  }

  selectCoffee() {
    this.selectedCoffee = true
    this.drinkType = "C";
  }

  makeDrink() {
    this.drinkMaker.execute(`${this.drinkType}::`);
    return;

    if (this.selectedChocolate) {
      this.drinkMaker.execute("H::");
      return;
    }

    if (this.selectedCoffee)
      this.drinkMaker.execute("C::");
    else
      this.drinkMaker.execute("T::");
}


  selectTea() {
    this.drinkType = "T"
  }

  selectChocolate() {
    this.selectedChocolate = true
    this.drinkType = "H"
  }
}
