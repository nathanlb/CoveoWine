import React, {Component} from 'react'

import ProductGrid from './components/ProductGrid'
import PairingBar from './components/pairing/PairingBar'
import Helmet from 'react-helmet';

import GlobalSearchBar from './components/GlobalSearchBar';

class App extends Component {

    constructor() {
        super()

        this.state = {
            food: null,
            sugar: 50,
            acidity: 50,
            priceRange: {min: 10, max: 100},
            searchString: null,
            fetchCount: 0,
        }

        this.stateUpdater = this.stateUpdater.bind(this)
    }

    stateUpdater = (change) => {
      this.setState(change, () => { console.log(this.state)})
    }

    style = {
        height: '100%',
        width: '100%',
        top: '0px',
        position: 'absolute',
    }

    render() {
        return (
            <div style={this.style}>
                {/*<Helmet bodyAttributes={{style: 'background-color : #343232'}}/>*/}
                <GlobalSearchBar stateUpdater={this.stateUpdater}/>
                <PairingBar stateUpdater={this.stateUpdater} appState={this.state}/>
                <ProductGrid stateUpdater={this.stateUpdater} appState={this.state}/>
            </div>
        )
    }
}

export default App