import React, {Component} from 'react'

import Button from 'react-bootstrap/Button'

import Colors from '../../../utils/ColorPalette'

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
        let prevCount = this.props.appState.fetchCount
        switch (this.props.type){
            case 'sidebar':
                this.props.stateUpdater( {fetchCount: ++prevCount} )
                break
            case 'modal':
                this.props.stateUpdater( {fetchCount: ++prevCount, showModal: false} )
                break
        }
    }
    
    render() {
      return (
          <div style={this.style}>
              <Button
                  variant="unique"
                  onClick={this.handleClick}
              >
                  Trouve moi du vin!
              </Button>
          </div>
      );
    }
}