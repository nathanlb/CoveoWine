import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProductFetcher from '../js/components/products/ProductFetcher'

Enzyme.configure({ adapter: new Adapter() })

describe("ProductGrid", () => {
  test("renders", () => {
    const mockState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: true,
      ordering: 2,
    }
    const wrapper = shallow(<ProductFetcher appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})