import React, {Component} from 'react'
import { MDBCol, MDBFormInline, MDBIcon } from 'mdbreact'

import Colors from '../../utils/ColorPalette'

export default class GlobalSearchBar extends Component{

    constructor() {
        super()
    }

    styles = {
        wrapper: {
            textAlign: 'center',
            width: '100%',
            marginLeft: '0px',
            backgroundColor: Colors.darkgrey,
        },
        col: {
            height: '3.5rem',
            marginLeft: '1.2rem'
        },
        row: {
            margin: '0.5rem',
        },
        input: {
            color: 'white',
            fontSize: '16px',
        },
        image: {
            position: 'absolute',
            top: '0.5rem',
            left: '0.5rem',
            height: '2.5rem'
        },
    }

    handleChange = (event) => {
        let prevCount = this.props.appState.fetchCount
        this.props.stateUpdater({searchString: event.target.value, fetchCount: ++prevCount})
    }

    render() {
        return(
            <div style={this.styles.wrapper} className="shadow-box-example z-depth-1" className="row justify-content-center">
                <img src="https://media.glassdoor.com/sqll/454188/saq-squarelogo-1460039711338.png" style={this.styles.image}/>
                <MDBCol md="6" style={this.styles.col}>
                    <MDBFormInline className="md-form" style={this.styles.row}>
                        <MDBIcon icon="search" />
                        <input 
                            className="form-control form-control-sm ml-3 w-100" 
                            type="text" 
                            placeholder="Search" 
                            aria-label="Search" 
                            style={this.styles.input} 
                            onChange={this.handleChange} 
                            onKeyDown={ e => { if (e.key === 'Enter') e.preventDefault() } }/>
                    </MDBFormInline>
                </MDBCol>
            </div>
        )
    }
}