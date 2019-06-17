import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FoodSelector from '../js/components/pairing/form_components/FoodSelector'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

Enzyme.configure({ adapter: new Adapter() })

describe("FoodSelector", () => {
  test("renders", () => {
    const mockState = {food: null}
    const wrapper = shallow(<FoodSelector appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })

  test("renders paragraph label groups", () => {
    const mockState = {food: null}
    const wrapper = mount(<FoodSelector appState={mockState}/>)
    expect(wrapper.find('p')).toHaveLength(1)
  })

  test("renders toggle button groups", () => {
    const mockState = {food: null}
    const wrapper = mount(<FoodSelector appState={mockState}/>)
    expect(wrapper.find(ToggleButtonGroup)).toHaveLength(2)
  })

  test("renders toggle buttons", () => {
    const mockState = {food: null}
    const wrapper = mount(<FoodSelector appState={mockState}/>)
    expect(wrapper.find(ToggleButton)).toHaveLength(6)
  })
})