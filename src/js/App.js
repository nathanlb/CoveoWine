import React, {Component} from 'react'

import ProductGrid from './components/ProductGrid'
import Colors from './ColorPalette';

class App extends Component {

  constructor() {
    super()

    this.state = {
 
    }
  }

  style = {

  }

  render() {
      return (
          <div
            style={{
              height: '100%',
              width: '100%',
              top: '0px',
              position: 'absolute',
            }}>
            {/* Insert Components Here */}
            <div 
              style={{
                top: "0px",
                width: "100%",
                height: "3rem",
                color: Colors.white,
                backgroundColor: Colors.darkgrey,
              }}>
              <h1 style={{textAlign: "center"}}>Search bar</h1>
            </div>
            <div
              style={{
                float: "left",
                height: "100%",
                width: "20%",
                backgroundColor: Colors.khaki,
                clear: "both",
              }}>
            </div>
            <ProductGrid></ProductGrid>
            {/*<div
              style={{
                float: "right",
                height: "90%",
                width: "75%",
                backgroundColor: "purple",
              }}>
            </div>*/}
          </div>
      )
  }
}

export default App