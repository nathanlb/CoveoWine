import React, {Component} from 'react'

import PriceSlider from './form_components/PriceSlider'
import SugarSlider from './form_components/SugarSlider'
import FoodSelector from './form_components/FoodSelector';
import AciditySlider from './form_components/AciditySlider';
import FetchButton from './form_components/FetchButton';

export default class PairingForm extends Component {

    constructor() { 
        super()
    }

    styles = {
        h1: {
            textAlign:'center', 
            marginTop: '2rem'
        },
    }

    foodSelectorSize = () => {
        switch(this.props.type) {
          case 'sidebar':
            return 'sm'
          case 'modal':
            return 'md'
        }
    }

    render() {
        return(
            <div>
                <h1 style={this.styles.h1}>Appariement</h1>
                <FoodSelector size={this.foodSelectorSize()} stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <SugarSlider stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <AciditySlider stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <PriceSlider stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <FetchButton stateUpdater={ this.props.stateUpdater } appState={this.props.appState} type={this.props.type}/>
            </div>
        )
    }
}