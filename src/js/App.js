import React, {Component} from 'react'

import ProductGrid from './components/ProductGrid'
import FilterBar from './components/FilterBar'

import Colors from './ColorPalette';
import GlobalSearchBar from './components/GlobalSearchBar';

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
            {/*<div 
              style={{
                top: "0px",
                width: "100%",
                height: "3rem",
                color: Colors.white,
                backgroundColor: Colors.darkgrey,
              }}>
            <h1 style={{textAlign: "center"}}>Search bar</h1>
            </div>*/}
            <GlobalSearchBar ></GlobalSearchBar>
            <FilterBar ></FilterBar>
            <ProductGrid ></ProductGrid>
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