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
        height: "calc(100% - 3.5rem)",
        overflow: 'hidden',
        backgroundColor: Colors.greyWhite,
        flexWrap: "wrap",
        overflowY: 'auto',
        margin: '0px',
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