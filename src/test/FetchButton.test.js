import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FetchButton from '../js/components/pairing/form_components/FetchButton'
import Button from 'react-bootstrap/Button'

Enzyme.configure({ adapter: new Adapter() })

describe("FetchButton", () => {
  test("renders", () => {
    const wrapper = shallow(<FetchButton />)
    expect(wrapper.exists()).toBe(true)
  })

  test("renders button", () => {
    const wrapper = mount(<FetchButton />)
    expect(wrapper.find(Button)).toHaveLength(1)
  })
})