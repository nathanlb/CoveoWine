import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SugarSlider from '../js/components/pairing/form_components/SugarSlider'

Enzyme.configure({ adapter: new Adapter() })

describe("SugerSlider", () => {
  test("renders", () => {
    const mockState = {sugar: 50}
    const wrapper = shallow(<SugarSlider appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})