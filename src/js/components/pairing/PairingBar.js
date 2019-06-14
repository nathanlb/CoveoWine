import React, {Component} from 'react'

import Colors from '../../utils/ColorPalette'
import PairingForm from './PairingForm'

export default class PairingBar extends Component {

    constructor() { 
        super()

        this.state = {
            show: false,
        }
    }

    styles = {
        show: {
            float: "left",
            height: "calc(100% - 3.5rem)",
            width: "20rem",
            backgroundColor: Colors.white,
            clear: "both",
            transitionDuration: '1s',
        },
        hide: {
            float: "left",
            height: "calc(100% - 3.5rem)",
            width: "20rem",
            backgroundColor: Colors.white,
            clear: "both",
            marginLeft: '-20rem',
        }
    }

    getStyle = () => {
        const {show} = this.state
        if (show)
            return this.styles.show
        else
            return this.styles.hide
    }

    componentDidMount() {
      setTimeout(() => this.setState({show: true}), 400)
    }

    render() {
        return (
            <div style={this.getStyle()} className="shadow-box-example z-depth-2">
                <PairingForm
                    stateUpdater={this.props.stateUpdater}
                    appState={this.props.appState}
                    type="sidebar"/>
            </div>
        )
    }
}