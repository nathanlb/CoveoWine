import React, {Component} from 'react'

import ProductGrid from './components/ProductGrid'
import FilterBar from './components/FilterBar'
import Helmet from 'react-helmet';

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
            <Helmet bodyAttributes={{style: 'background-color : #343232'}}/>
            <GlobalSearchBar ></GlobalSearchBar>
            <FilterBar ></FilterBar>
            <ProductGrid ></ProductGrid>
          </div>
      )
  }
}

export default App