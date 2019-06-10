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
        height: "100%",
        overflow: 'hidden',
        backgroundColor: Colors.greyWhite,
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