import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SearchBar from '../js/components/search/SearchBar'

Enzyme.configure({ adapter: new Adapter() })

describe("SearchBar", () => {
  test("renders", () => {
    const mockState = {ordering: 0}
    const wrapper = shallow(<SearchBar appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })
})