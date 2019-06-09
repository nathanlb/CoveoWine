import React, {Component} from 'react'

import Button from 'react-bootstrap/Button'

export default class FetchButton extends Component {

    constructor() {
        super();
    
        this.handleClick = this.handleClick.bind(this);
    
        this.state = {
            isLoading: false,
        };
    }

    style = {
        width: '100%',
        padding: '1rem',
        textAlign: 'center',
    }
    
    handleClick() {
        this.setState({ isLoading: true }, () => {
            // trigger loading callback from prop
            simulateNetworkRequest().then(() => {
                this.setState({ isLoading: false });
            });
        });
    }
    
      render() {
        const { isLoading } = this.state;
    
        return (
            <div style={this.style}>
                <Button
                    variant="info"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleClick : null}
                >
                    {isLoading ? 'Loading…' : 'Trouve moi du vin!'}
                </Button>
            </div>
        );
      }
}