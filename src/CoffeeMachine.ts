import { DrinkMaker } from "./DrinkMaker.js";

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private selectedCoffee: boolean = false;
  private selectedChocolate: boolean = false;

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;

  }

  selectCoffee() {
    this.selectedCoffee = true
  }

  makeDrink() {
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

  }

  selectChocolate() {
    this.selectedChocolate = true
  }
}
