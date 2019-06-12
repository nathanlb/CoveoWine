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
        this.handleClick = this.handleClick.bind(this)
    }

    style = {
        width: '100%',
        padding: '1rem'
    }

    inRange = (x, min, max) => { return ((x-min)*(x-max) <= 0) }

    handleClick = (value) => {
        console.log(value)
        console.log(`sel: ${this.state.selected}`)
        if (value === this.state.selected){
            this.setState({
                selected: null,
                radio1Checked: false,
                radio2Checked: false,  
            })
        }
    }

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
                    <ToggleButton variant="unique" type="radio" name="radio" value="1">
                        Viande Rouge
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio" value="2">
                        Viande Blanche
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio" value="3">
                        Fruits de mer
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup 
                    name="tbg1"
                    toggle 
                    size={this.props.size}
                    value={this.state.radio2Checked}
                    onChange={ (value) => this.handleChange(value) }>
                    <ToggleButton variant="unique" type="radio" name="radio" value="4">
                        {"Fromages & Charcuteries"}
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio" value="5">
                        Desserts
                    </ToggleButton>
                    <ToggleButton variant="unique" type="radio" name="radio" value="6">
                        N/A
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        )
    }
}