import React, {Component} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export default class FoodSelector extends Component {

    constructor() { 
        super()

        this.state = { 

        }
    }

    style = {
        width: '100%',
        padding: '1rem'
    }

    render() {
        return(
            <div className="d-flex flex-column" style={this.style} >
                <p style={{marginBottom: '0.5rem'}}>Accompagnement</p>
                <ButtonGroup toggle size={this.props.size} style={{paddingBottom: '0.5rem'}}>
                    <ToggleButton variant="info" type="radio" name="radio" value="1">
                        Viande Rouge
                    </ToggleButton>
                    <ToggleButton variant="info" type="radio" name="radio" value="2">
                        Viande Blanche
                    </ToggleButton>
                    <ToggleButton variant="info" type="radio" name="radio" value="3">
                        Fruits de mer
                    </ToggleButton>
                </ButtonGroup>
                <ButtonGroup toggle size={this.props.size}>
                    <ToggleButton variant="info" type="radio" name="radio" value="4">
                        {"Fromages & Charcuteries"}
                    </ToggleButton>
                    <ToggleButton variant="info" type="radio" name="radio" value="5">
                        Desserts
                    </ToggleButton>
                </ButtonGroup>
            </div>
        )
    }
}