import React, {Component} from 'react'

import ProductFetcher from './ProductFetcher'
import Colors from '../utils/ColorPalette'

export default class ProductGrid extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fetchCount: this.props.fetchCount
        }

        this.getRecommendations = this.getRecommendations.bind(this)
    }

    style = {
        display: "flex",
        height: "100%",
        overflow: 'hidden',
        backgroundColor: Colors.greyWhite,
        flexWrap: "wrap",
        overflowY: 'auto',
    }

    getRecommendations = () => {
      const {fetchCount} = this.props.appState
      if (fetchCount > 0) {
          return <ProductFetcher key={this.props.appState.fetchCount} stateUpdater={this.props.stateUpdater} appState={this.props.appState}/>
      }
    }

    render() {
        return (
            <div style={this.style}>
                { this.getRecommendations() }
            </div>
        )
    }
}