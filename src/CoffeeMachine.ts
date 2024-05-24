import { DrinkMaker } from "./DrinkMaker.js";

export class ProcessingOrder {
  private sugar: number = 0

  constructor(private readonly drinkType: string) {}

  addSugar() {
    this.sugar++;
  }

  toCommand() {
    return `${this.drinkType}${this.getSugarAndStick()}`
  }

  private getSugarAndStick() {
    if (this.sugar > 0) {
      return `:${this.sugar}:0`;
    }

    return `::`
  }
}

export class CoffeeMachine {
  private drinkMaker: DrinkMaker;
  private order?: ProcessingOrder

  constructor(drinkMaker: DrinkMaker) {
    this.drinkMaker = drinkMaker;
  }

  makeDrink(): void {
    this.drinkMaker.execute(this.createCommand());
  }

  private createCommand() {
    if (!this.order) {
      return `M:drink-has-not-been-selected`
    }

    return this.order.toCommand()
  }

  selectCoffee() {
    this.order = new ProcessingOrder("C")
  }


  selectTea() {
    this.order = new ProcessingOrder("T")
  }

  selectChocolate() {
    this.order = new ProcessingOrder("H")
  }

  addSugar() {
    return this.order?.addSugar()
  }
}
