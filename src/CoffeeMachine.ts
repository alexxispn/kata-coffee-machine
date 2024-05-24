import { DrinkMaker } from "./DrinkMaker.js";

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private selectedCoffee: boolean = false;

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;

  }

  selectCoffee() {
    this.selectedCoffee = true
  }

  makeDrink() {
    if (this.selectedCoffee)
      this.drinkMaker.execute("C::");
    else
      this.drinkMaker.execute("T::");
}


  selectTea() {

  }
}
