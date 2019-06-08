import React, {Component} from 'react'

import ProductCard from './ProductCard'
import ProductFetcher from './ProductFetcher'
import Colors from '../ColorPalette'

export default class ProductGrid extends Component {

    constructor() {
        super()

        this.state = {

        }
    }

    style = {
        display: "flex",
        float: "right",
        height: "100%",
        width: "80%",
        backgroundColor: Colors.wine,
        flexWrap: "wrap",
        overflowY: 'auto',
    }

    render() {
        return (
            <div style={this.style}>
                <ProductFetcher />
            </div>
        )
    }
}