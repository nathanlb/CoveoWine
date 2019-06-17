import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PairingForm from '../js/components/pairing/PairingForm'
import PriceSlider from '../js/components/pairing/form_components/PriceSlider'
import SugarSlider from '../js/components/pairing/form_components/SugarSlider'
import FoodSelector from '../js/components/pairing/form_components/FoodSelector';
import AciditySlider from '../js/components/pairing/form_components/AciditySlider';
import FetchButton from '../js/components/pairing/form_components/FetchButton';

Enzyme.configure({ adapter: new Adapter() })

describe("PairingForm", () => {
  test("renders", () => {
    const wrapper = shallow(<PairingForm />)
    expect(wrapper.exists()).toBe(true)
  })

  test("renders header", () => {
    const mockAppState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: false,
      ordering: 2,
    }
    const wrapper = mount(<PairingForm appState={mockAppState}/>)
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  test("renders price slider child components", () => {
    const mockAppState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: false,
      ordering: 2,
    }
    const mockStateUpdater = () => {}
    const wrapper = mount(<PairingForm stateUpdater={mockStateUpdater} appState={mockAppState}/>)
    expect(wrapper.find(PriceSlider)).toHaveLength(1)
  })

  test("renders sugar slider child components", () => {
    const mockAppState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: false,
      ordering: 2,
    }
    const mockStateUpdater = () => {}
    const wrapper = mount(<PairingForm stateUpdater={mockStateUpdater} appState={mockAppState}/>)
    expect(wrapper.find(SugarSlider)).toHaveLength(1)
  })

  test("renders food selector child components", () => {
    const mockAppState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: false,
      ordering: 2,
    }
    const mockStateUpdater = () => {}
    const wrapper = mount(<PairingForm stateUpdater={mockStateUpdater} appState={mockAppState}/>)
    expect(wrapper.find(FoodSelector)).toHaveLength(1)
  })

  test("renders acidity slider child components", () => {
    const mockAppState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: false,
      ordering: 2,
    }
    const mockStateUpdater = () => {}
    const wrapper = mount(<PairingForm stateUpdater={mockStateUpdater} appState={mockAppState}/>)
    expect(wrapper.find(AciditySlider)).toHaveLength(1)
  })

  test("renders acidity slider child components", () => {
    const mockAppState = {
      food: null,
      sugar: 50,
      acidity: 50,
      priceRange: {min: 10, max: 100},
      searchString: null,
      fetchCount: 0,
      showModal: false,
      ordering: 2,
    }
    const mockStateUpdater = () => {}
    const wrapper = mount(<PairingForm stateUpdater={mockStateUpdater} appState={mockAppState}/>)
    expect(wrapper.find(FetchButton)).toHaveLength(1)
  })
})