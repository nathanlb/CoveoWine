import React, {Component} from 'react'
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

export default class SugarSlider extends Component {

    constructor(props) { 
        super(props)

        this.state = { 
            value: this.props.appState.sugar
        }
    }

    style = {
        width: '100%',
        padding: '1rem',
    }

    sliderStyle = {
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    }

    render() {
        return (
            <div style={this.style}>
                <p style={{marginBottom: '0rem'}}>Sucre</p>
                <div style={this.sliderStyle}>
                    <Slider 
                        min={0} 
                        defaultValue={50} 
                        marks={{ 0:'-', 50:'0', 100:'+' }} 
                        step={null} 
                        onAfterChange={ value => this.props.stateUpdater({sugar: value}) }/>
                </div>
            </div>
        )
    }
}