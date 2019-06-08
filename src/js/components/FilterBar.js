import React, {Component} from 'react'

import Colors from '../ColorPalette'

export default class FilterBar extends Component {

    constructor() { 
        super()

        this.state = {

        }
    }

    style = {
        float: "left",
        height: "100%",
        width: "20%",
        backgroundColor: Colors.white,
        clear: "both",
    }

    render() {
        return (
            <div style={this.style}>
                
            </div>
        )
    }
}