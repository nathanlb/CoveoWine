import React, {Component} from 'react'

import ProductCard from './ProductCard'
import KEYS from '../secret'

export default class ProductFetcher extends Component {

    constructor() { 
        super()

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            response: {},
        }

        this.constructQuery = this.constructQuery.bind(this)
    }

    constructQuery = () => {
        //var query = "https://cloudplatform.coveo.com/rest/search?access_token=YOUR_TOKEN&q=@tpcepagenomsplitgroup==Merlot"
        var query = "https://cloudplatform.coveo.com/rest/search?access_token=YOUR_TOKEN&q=@tpcouleur==Blanc"
        var res = query.replace('YOUR_TOKEN', KEYS.APITOKEN)
        console.log(res)
        return res
    }

    componentDidMount() {
        fetch(this.constructQuery())
        .then(res => res.json())
        .then(
            (response) => {
            this.setState({
                isLoaded: true,
                items: response.results,
                response: response
            })
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            })
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                items.map( item => ( <ProductCard key={item.uniqueId} item={item} /> ) )
            )
        }
    }
}