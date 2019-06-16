import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AciditySlider from '../js/components/pairing/form_components/AciditySlider'

Enzyme.configure({ adapter: new Adapter() })

describe("AciditySlider", () => {
  test("renders", () => {
    const mockState = {acidity: 50}
    const wrapper = shallow(<AciditySlider appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})