import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SearchBar from '../js/components/search/SearchBar'
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from 'mdbreact'

Enzyme.configure({ adapter: new Adapter() })

describe("SearchBar", () => {
  test("renders", () => {
    const mockState = {ordering: 0}
    const wrapper = shallow(<SearchBar appState={mockState}/>)

    expect(wrapper.exists()).toBe(true)
  })

  test("renders search bar input form", () => {
    const mockState = {ordering: 0}
    const wrapper = mount(<SearchBar appState={mockState}/>)

    expect(wrapper.find(MDBFormInline)).toHaveLength(1)
  })

  test("renders ordering buttons", () => {
    const mockState = {ordering: 0}
    const wrapper = mount(<SearchBar appState={mockState}/>)

    expect(wrapper.find(MDBBtn)).toHaveLength(2)
  })

  test("renders ordering buttons", () => {
    const mockState = {ordering: 0}
    const wrapper = mount(<SearchBar appState={mockState}/>)

    expect(wrapper.find(MDBIcon)).toHaveLength(1)
  })
})