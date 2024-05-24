import { DrinkMaker } from "./DrinkMaker.js";

export class ProcessingOrder {
  private sugar: number = 0

  constructor(private readonly drinkType: string) {}

  addSugar() {
    this.sugar++;
  }

  toCommand() {
    if (this.sugar > 0) {
      return `${this.drinkType}:${this.sugar}:0`
    }

    return `${this.drinkType}::`
  }
}

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private drinkType: string = ""
  private sugar: number = 0
  private order?: ProcessingOrder

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;
  }

  selectCoffee() {
    this.drinkType = "C";
    this.sugar = 0;
    this.order = new ProcessingOrder("C")
  }

  makeDrink(): void {
    this.drinkMaker.execute(this.createCommand());
  }

  private createCommand() {
    if (this.drinkType === "") {
      return `M:drink-has-not-been-selected`
    }
    if (!this.order) {
      return `M:drink-has-not-been-selected`
    }

    if (this.sugar > 0) {
      return `${this.drinkType}:${this.sugar}:0`
    }

    return this.order.toCommand()
  }


  selectTea() {
    this.drinkType = "T"
    this.sugar = 0;
    this.order = new ProcessingOrder("T")
  }

  selectChocolate() {
    this.drinkType = "H"
    this.sugar = 0;
    this.order = new ProcessingOrder("H")
  }

  addSugar() {
    this.sugar += 1
    return this.order?.addSugar()
  }
}
