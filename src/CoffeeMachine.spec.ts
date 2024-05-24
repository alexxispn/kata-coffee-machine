import { describe, expect, it, vi } from "vitest";
import { DrinkMaker } from "./DrinkMaker.js";
import { CoffeeMachine } from "./CoffeeMachine.js";

describe("CoffeeMachine", () => {
  it("makes coffee", () => {
    const drinkMaker: DrinkMaker = { execute: vi.fn() }
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("C::")
  })
})
