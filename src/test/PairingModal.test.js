import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PairingModal from '../js/components/pairing/PairingModal'

Enzyme.configure({ adapter: new Adapter() })

describe("PairingModal", () => {
  test("renders", () => {
    const wrapper = shallow(<PairingModal />)

    expect(wrapper.exists()).toBe(true)
  })
})