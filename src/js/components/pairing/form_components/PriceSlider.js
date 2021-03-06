import React, {Component} from 'react'
import Slider from 'rc-slider';
import Colors from '../../../utils/ColorPalette'

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

export default class PriceSlider extends Component {

    constructor(props) { 
        super(props)

        this.state = { 
            range: this.props.appState.priceRange,
        }
    }

    styles = {
        wrapper: {
            width: '100%',
            padding: '1rem',
        },
        slider: {
            width: '100%',
            clear: 'both',
            paddingLeft: '1rem',
            paddingRight: '1rem',
        },
        sliderTitle: {
            position: 'abolute', 
            float: 'left', 
            marginBottom: '0.5rem',
        },
    }

    handleChange = (value) => {
        let range = {min: value[0] , max: value[1]}
        this.props.stateUpdater({priceRange: range})
    }

    render() {
        return (
            <div style={this.styles.wrapper}>
                <p style={this.styles.sliderTitle}>Prix : {`$${this.props.appState.priceRange.min} - $${this.props.appState.priceRange.max}`}</p>
                <div style={this.styles.slider}>
                    <Range
                        min={0}
                        max={1000}
                        defaultValue={[this.state.range.min, this.state.range.max]}
                        tipFormatter={value => `$${value}`}
                        onAfterChange={ value => this.handleChange(value) } 
                    />
                </div>
            </div>
        )
    }
}