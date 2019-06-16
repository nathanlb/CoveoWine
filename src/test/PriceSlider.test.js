import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PriceSlider from '../js/components/pairing/form_components/PriceSlider'

Enzyme.configure({ adapter: new Adapter() })

describe("PriceSlider", () => {
  test("renders", () => {
    const mockState = {priceRange: {min: 10, max: 100}}
    const wrapper = shallow(<PriceSlider appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})