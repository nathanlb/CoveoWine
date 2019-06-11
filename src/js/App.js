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
            sugar: null,
            acidity: null,
            priceRange: {},
            searchString: null,
            fetchResults: false,
            isLoading: false,
        }

        this.stateUpdater = this.stateUpdater.bind(this)
    }

    stateUpdater = (change) => this.setState(change)

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
                <GlobalSearchBar />
                <PairingBar stateUpdater={this.stateUpdater} isLoading={this.state.isLoading}/>
                <ProductGrid />
            </div>
        )
    }
}

export default App