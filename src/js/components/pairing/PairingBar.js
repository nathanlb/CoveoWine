import React, {Component} from 'react'
import PriceSlider from './PriceSlider'
import SugarSlider from './SugarSlider'

import Colors from '../../ColorPalette'
import FoodSelector from './FoodSelector';
import AciditySlider from './AciditySlider';
import FetchButton from './FetchButton';

export default class PairingBar extends Component {

    constructor() { 
        super()

        this.state = {

        }
    }

    style = {
        float: "left",
        height: "100%",
        width: "20rem",
        backgroundColor: Colors.white,
        clear: "both",
    }

    render() {
        return (
            <div style={this.style}>
                <h1 style={{textAlign:'center', marginTop: '2rem'}}>Pairing Quiz</h1>
                <FoodSelector size="sm"/>
                <SugarSlider />
                <AciditySlider />
                <PriceSlider />
                <FetchButton />
            </div>
        )
    }
}