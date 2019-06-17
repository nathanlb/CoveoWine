import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../js/App'
import SearchBar from '../js/components/search/SearchBar'
import ProductGrid from '../js/components/products/ProductGrid'
import PairingBar from '../js/components/pairing/PairingBar'
import PairingModal from '../js/components/pairing/PairingModal'


Enzyme.configure({ adapter: new Adapter() })

describe("App", () => {
  test("renders", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
  })

  test("renders searchbar child components", () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(SearchBar)).toHaveLength(1)
  })

  test("renders pairing modal child components", () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(PairingModal)).toHaveLength(1)
  })

  test("renders product grid child components", () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(ProductGrid)).toHaveLength(1)
  })

  test("renders pairing bar child components when showModal set to false", () => {
    const wrapper = mount(<App />)
    wrapper.setState({showModal: false})
    expect(wrapper.find(PairingBar)).toHaveLength(1)
  })

  test("state updater function edits state", () => {
    const wrapper = mount(<App />)
    const newFoodCode = 1
    wrapper.instance().stateUpdater({food: newFoodCode})
    expect(wrapper.state('food')).toEqual(newFoodCode)
  })
})