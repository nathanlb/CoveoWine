import React, {Component} from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default class FoodSelector extends Component {

    constructor(props) { 
        super(props)

        this.state = { 
            selected: this.props.appState.food,
            radio1Checked: false,
            radio2Checked: false,
        }

        this.inRange = this.inRange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    style = {
        width: '100%',
        padding: '1rem'
    }

    inRange = (x, min, max) => { return ((x-min)*(x-max) <= 0) }

    handleChange = (value) => {
        if (this.inRange(value, 1, 3)){
            this.setState({
                radio1Checked: value,
                radio2Checked: false,  
            })
        }
        else if (this.inRange(value, 4, 6)){
            this.setState({
                radio1Checked: false,
                radio2Checked: value,  
            })
        }
        this.props.stateUpdater({food: value})
    }

    render() {
        return(
            <div className="d-flex flex-column" style={this.style} >
                <p style={{marginBottom: '0.5rem'}}>Accompagnement</p>
                <ToggleButtonGroup 
                    name="tbg1" 
                    toggle 
                    size={this.props.size} 
                    style={{paddingBottom: '0.5rem'}}
                    value={this.state.radio1Checked}
                    onChange={ (value) => this.handleChange(value) }>
                    <ToggleButton variant="unique" type="radio" name="radio1" value="1">
                        Viande Rouge
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio2" value="2">
                        Volaille
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio3" value="3">
                        Fruits de mer
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup 
                    name="tbg2"
                    toggle 
                    size={this.props.size}
                    value={this.state.radio2Checked}
                    onChange={ (value) => this.handleChange(value) }>
                    <ToggleButton variant="unique" type="radio" name="radio4" value="4">
                        {"Fromages & Charcuteries"}
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio5" value="5">
                        Desserts
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio6" value="6">
                        N/A
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
}