import React, {Component} from 'react'

import Button from 'react-bootstrap/Button'

import Colors from '../../../utils/ColorPalette'

export default class FetchButton extends Component {

    constructor() {
        super()

        this.state = {
            isLoaded: false,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    style = {
        width: '100%',
        padding: '1rem',
        textAlign: 'center',
    }
    
    handleClick() {
        let prevCount = this.props.appState.fetchCount
        this.props.stateUpdater( {fetchCount: ++prevCount} )
    }
    
      render() {
        const { isLoading } = this.state
    
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