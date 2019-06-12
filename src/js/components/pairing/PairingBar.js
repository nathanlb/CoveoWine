import React, {Component} from 'react'
import PriceSlider from './formComponents/PriceSlider'
import SugarSlider from './formComponents/SugarSlider'

import Colors from '../../utils/ColorPalette'
import FoodSelector from './formComponents/FoodSelector';
import AciditySlider from './formComponents/AciditySlider';
import FetchButton from './formComponents/FetchButton';

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
            <div style={this.style} className="shadow-box-example z-depth-2">
                <h1 style={{textAlign:'center', marginTop: '2rem'}}>Pairing Tool</h1>
                <FoodSelector size="sm" stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <SugarSlider stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <AciditySlider stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <PriceSlider stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
                <FetchButton stateUpdater={ this.props.stateUpdater } appState={this.props.appState}/>
            </div>
        )
    }
}