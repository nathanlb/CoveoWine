import React, {Component} from 'react'
import { MDBCol, MDBFormInline, MDBIcon} from 'mdbreact'

import Colors from '../utils/ColorPalette'

export default class GlobalSearchBar extends Component{

    constructor() {
        super()
    }

    buttonStyle = {
        outline: 'none',
        backgroundColor: Colors.wine,
        color: Colors.white,
        boxShadow: 'none'
    }

    style = {
      textAlign: 'center',
      backgroundColor: Colors.darkgrey
    }

    render() {
        return(
            <div style={this.style} className="shadow-box-example z-depth-1" className="row justify-content-center">
              <MDBCol md="6" style={{height: '3.5rem'}}>
                  <MDBFormInline className="md-form" style={{margin: '0.5rem'}}>
                      <MDBIcon icon="search" />
                      <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Search" aria-label="Search" />
                  </MDBFormInline>
              </MDBCol>
            </div>
        )
    }
}