import React, {Component} from 'react'
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from 'mdbreact'

import Colors from '../../utils/ColorPalette'

export default class SearchBar extends Component{

    constructor() {
        super()
    }

    styles = {
        wrapper: {
            textAlign: 'center',
            width: '100%',
            margin: '0px',
            backgroundColor: Colors.darkgrey,
            overflowX: 'hidden',
        },
        col: {
            height: '3.5rem',
            marginLeft: '2rem',
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
        alphaButton: {
            position: 'absolute',
            top: '0.4rem',
            right: '2rem',
            width: '90px',
        },
        priceButton: {
            position: 'absolute',
            top: '0.4rem',
            right: '8.5rem',
            width: '90px',
            marginRight: '0.2rem'
        },
    }

    alphaButtonIcon = (ordering) => {
        if (ordering != null){
            switch(ordering){
                case 0:
                    return <MDBIcon icon="caret-up" className="ml-1" />
                case 1:
                    return <MDBIcon icon="caret-down" className="ml-1" />
            }
        }
    }

    priceButtonIcon = (ordering) => {
        if (ordering != null){
            switch(ordering){
                case 2:
                    return <MDBIcon icon="caret-up" className="ml-1" />
                case 3:
                    return <MDBIcon icon="caret-down" className="ml-1" />
            }
        }
    }

    handleSearchChange = (event) => {
        let prevCount = this.props.appState.fetchCount
        this.props.stateUpdater({searchString: event.target.value, fetchCount: ++prevCount})
    }

    handleOrderingChange = (buttonName) => {
        return (e) => {
            const {ordering} = this.props.appState
            let prevCount = this.props.appState.fetchCount
            console.log("order:" + ordering)
            switch(buttonName) {
                case 'alpha':
                    if (ordering >= 1) 
                        this.props.stateUpdater({ordering: 0})
                    else 
                        this.props.stateUpdater({ordering: 1})
                    break
                case 'price':
                    if (ordering < 2 || ordering == 3)
                        this.props.stateUpdater({ordering: 2})
                    else 
                        this.props.stateUpdater({ordering: 3})
                    break
            }
        }
    }

    render() {
        return(
            <div style={this.styles.wrapper} className="shadow-box-example z-depth-1">
                <div className="row justify-content-center">
                    <img src="https://media.glassdoor.com/sqll/454188/saq-squarelogo-1460039711338.png" style={this.styles.image}/>
                    <MDBCol offset="3" md="6" style={this.styles.col}>
                        <MDBFormInline className="md-form" style={this.styles.row}>
                            <MDBIcon icon="search" />
                            <input 
                                className="form-control form-control-sm ml-3 w-100" 
                                type="text" 
                                placeholder="Search" 
                                aria-label="Search" 
                                style={this.styles.input} 
                                onChange={this.handleSearchChange} 
                                onKeyDown={ e => { if (e.key === 'Enter') e.preventDefault() } }/>
                        </MDBFormInline>
                    </MDBCol>
                    <MDBBtn
                        color="dark" 
                        size="sm" 
                        style={this.styles.alphaButton}
                        onClick={ this.handleOrderingChange('price') }>
                        Prix {this.priceButtonIcon(this.props.appState.ordering)}
                    </MDBBtn>
                    <MDBBtn 
                        color="dark" 
                        size="sm" 
                        style={this.styles.priceButton}
                        onClick={ this.handleOrderingChange('alpha') }>
                        A-Z {this.alphaButtonIcon(this.props.appState.ordering)}
                    </MDBBtn>
                </div>
            </div>
        )
    }
}