import { beforeEach, describe, expect, it, vi } from "vitest";
import { DrinkMaker } from "./DrinkMaker.js";
import { CoffeeMachine } from "./CoffeeMachine.js";

describe("CoffeeMachine", () => {
  let drinkMaker: DrinkMaker
  let coffeeMachine:CoffeeMachine

  beforeEach(() => {
    drinkMaker = { execute: vi.fn() }
    coffeeMachine = new CoffeeMachine(drinkMaker)
  })

  describe("iteration 1", () => {
    it("makes coffee", () => {
      coffeeMachine.selectCoffee()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("C::")
    })

    it("makes tea", () => {
      coffeeMachine.selectTea()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("T::")
    })

    it("makes chocolate", () => {
      coffeeMachine.selectChocolate()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("H::")
    })

    it("adds one of sugar", () => {
      coffeeMachine.selectCoffee()
      coffeeMachine.addSugar()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith(expect.stringMatching(/C:1/))
    })

    it("adds two of sugar", () => {
      coffeeMachine.selectCoffee()
      coffeeMachine.addSugar()
      coffeeMachine.addSugar()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith(expect.stringMatching(/C:2/))
    })

    it("adds a stick when has sugar", () => {
      coffeeMachine.selectCoffee()
      coffeeMachine.addSugar()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("C:1:0")
    })

    it('displays an error message when drink has not been selected', () => {
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("M:drink-has-not-been-selected")
    })

    it('resets the coffee machine on new order of tea', () => {
      coffeeMachine.selectCoffee()
      coffeeMachine.addSugar()
      coffeeMachine.selectTea()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("T::")
    })

    it('resets the coffee machine on new order coffee', () => {
      coffeeMachine.selectCoffee()
      coffeeMachine.addSugar()
      coffeeMachine.selectCoffee()
      coffeeMachine.makeDrink()

      expect(drinkMaker.execute).toHaveBeenCalledOnce()
      expect(drinkMaker.execute).toHaveBeenCalledWith("C::")
    })
  });
})
