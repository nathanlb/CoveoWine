import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProductGrid from '../js/components/products/ProductGrid'

Enzyme.configure({ adapter: new Adapter() })

describe("ProductGrid", () => {
  test("renders", () => {
    const mockState = {fetchCount: 0}
    const wrapper = shallow(<ProductGrid appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})