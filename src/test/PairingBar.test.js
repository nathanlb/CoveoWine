import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PairingBar from '../js/components/pairing/PairingBar'

Enzyme.configure({ adapter: new Adapter() })

describe("PairingBar", () => {
  test("renders", () => {
    const wrapper = shallow(<PairingBar/>)

    expect(wrapper.exists()).toBe(true)
  })
})