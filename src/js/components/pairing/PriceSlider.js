import React, {Component} from 'react'
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

export default class PriceSlider extends Component {

    constructor() { 
        super()

        this.state = { 
            range: {
                min: 10,
                max: 100
            },
        }
    }

    style = {
        width: '100%',
        padding: '1rem',
    }
    
    sliderStyle = {
        width: '100%',
        clear: 'both',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    }

    sliderTitleStyle = {
        position: 'abolute', 
        float: 'left', 
        marginBottom: '0.5rem',
    }

    sliderValueLabelStyle = {
        textAlign: 'center', 
        zIndex: '20',
        marginBottom: '0.5rem',
        fontSize: '14px',
    }

    render() {
        return (
            <div style={this.style}>
                <p style={this.sliderTitleStyle}>Prix : {`$${this.state.range.min} - $${this.state.range.max}`}</p>
                <div style={this.sliderStyle}>
                    <Range
                        min={0}
                        max={200}
                        defaultValue={[this.state.range.min, this.state.range.max]}
                        tipFormatter={value => `$${value}`}
                        onAfterChange={ value => this.setState( {range: {min: value[0] , max: value[1]}} )} 
                    />
                </div>
            </div>
        )
    }
}