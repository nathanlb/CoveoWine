import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FoodSelector from '../js/components/pairing/form_components/FoodSelector'

Enzyme.configure({ adapter: new Adapter() })

describe("FoodSelector", () => {
  test("renders", () => {
    const mockState = {food: null}
    const wrapper = shallow(<FoodSelector appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})