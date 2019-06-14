import React, {Component} from 'react'

import ProductGrid from './components/products/ProductGrid'
import PairingBar from './components/pairing/PairingBar'
import ParingModal from './components/pairing/PairingModal'

import GlobalSearchBar from './components/search/GlobalSearchBar';

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
            showModal: true,
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

    pairingTool = () => {
        const {showModal} = this.state
        if (showModal)
            return <ParingModal show={true} stateUpdater={this.stateUpdater} appState={this.state}/>
        else 
            return <PairingBar stateUpdater={this.stateUpdater} appState={this.state}/>
    }

    render() {
        return (
            <div style={this.style}>
                {/*<Helmet bodyAttributes={{style: 'background-color : #343232'}}/>*/}
                <GlobalSearchBar stateUpdater={this.stateUpdater} appState={this.state}/>
                { this.pairingTool() }
                <ProductGrid stateUpdater={this.stateUpdater} appState={this.state}/>
            </div>
        )
    }
}

export default App