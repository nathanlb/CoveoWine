import React, {Component} from 'react'

import Button from 'react-bootstrap/Button'

import Colors from '../../utils/ColorPalette'

export default class FetchButton extends Component {

    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    style = {
        width: '100%',
        padding: '1rem',
        textAlign: 'center',
    }
    
    handleClick() {
        this.props.stateUpdater( {fetchResults: true} )
    }
    
      render() {
        const { isLoading } = this.props
    
        return (
            <div style={this.style}>
                <Button
                    variant="unique"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleClick : null}
                    style={{background: `${Colors.wine} !important`}}
                >
                    {isLoading ? 'Loading…' : 'Trouve moi du vin!'}
                </Button>
            </div>
        );
      }
}