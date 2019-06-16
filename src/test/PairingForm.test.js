import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PairingForm from '../js/components/pairing/PairingForm'

Enzyme.configure({ adapter: new Adapter() })

describe("PairingForm", () => {
  test("renders", () => {
    const wrapper = shallow(<PairingForm />)

    expect(wrapper.exists()).toBe(true)
  })
})