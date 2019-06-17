import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PairingTool from '../js/utils/PairingTool'

Enzyme.configure({ adapter: new Adapter() })

describe("PairingTool", () => {
  test("instantiates", () => {
    const pTool = new PairingTool()
    expect(pTool !== null).toBe(true)
  })

  test("returns price params for given range", () => {
    const mockRange = { min: 50, max: 100 }
    const pTool = new PairingTool()
    const priceParams = pTool.priceParams(mockRange)
    expect(priceParams === [`@tpprixnum>=${mockRange.min}`, `@tpprixnum<=${mockRange.max}`])
  })

  test("returns search params for given string (valid)", () => {
    const mockString = 'This is a search string'
    const pTool = new PairingTool()
    const searchParams = pTool.searchParams(mockString)
    expect(searchParams === ['This is a search string*'])
  })

  test("returns search params for given string (null)", () => {
    const mockString = null
    const pTool = new PairingTool()
    const searchParams = pTool.searchParams(mockString)
    expect(searchParams === [])
  })

  test("returns search params for given string (empty)", () => {
    const mockString = ''
    const pTool = new PairingTool()
    const searchParams = pTool.searchParams(mockString)
    expect(searchParams === [])
  })

  test("returns food params for given code", () => {
    const mockFoodCode = 1
    const pTool = new PairingTool()
    const foodParams = pTool.foodParams(mockFoodCode)
    expect(foodParams === ['\"Vin rouge\"'])
  })

  test("returns food params for given code (invalid)", () => {
    const mockFoodCode = 0
    const pTool = new PairingTool()
    const foodParams = pTool.foodParams(mockFoodCode)
    expect(foodParams === [])
  })

  test("returns query string with params", () => {
    const mockRawParams = {
      searchString: "search string",
      food: "1",
      range: {
        min: 0,
        max: 500
      }
    }
    const pTool = new PairingTool()
    const queryString = pTool.getQuery(mockRawParams)
      
    expect(queryString === `@tpcategorie=Vin* NOT @tppagebody search* string* \"Vin rouge\" @tpprixnum>=${mockRawParams.range.min} @tpprixnum<=${mockRawParams.range.max}`)
  })
})