import { describe, it, expect, vi} from "vitest"

interface DrinkMaker {
  execute(command: string): void
}

class CoffeeMachine {
  constructor(drinkMaker: DrinkMaker) {

  }

  selectCoffee() {

  }

  makeDrink() {

  }
}

describe("CoffeeMachine", () => {
  it("makes coffee", () => {
    const drinkMaker: DrinkMaker = { execute: vi.fn() }
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::")
  })
})
