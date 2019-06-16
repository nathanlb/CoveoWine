import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../js/App'

Enzyme.configure({ adapter: new Adapter() })

describe("App", () => {
  test("renders", () => {
    const wrapper = shallow(<App />)

    expect(wrapper.exists()).toBe(true)
  })
})