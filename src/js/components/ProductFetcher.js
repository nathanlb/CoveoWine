import React, {Component} from 'react'
import axios from 'axios'

import ProductCard from './ProductCard'
import PairingTool from '../utils/PairingTool'

import KEYS from '../secret'

export default class ProductFetcher extends Component {

    constructor(props) { 
        super(props)

        this.state = {
            error: null,
            items: [],
            response: {},
            isLoaded: false,
        }

        this.constructQuery = this.constructQuery.bind(this)
    }

    constructQuery = () => {
        var query = "https://cloudplatform.coveo.com/rest/search?access_token=YOUR_TOKEN&q=@tpcouleur==Rouge"
        var res = query.replace('YOUR_TOKEN', KEYS.APITOKEN)
        console.log(res)
        return res
    }

    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${KEYS.APITOKEN}`,
    }

    componentDidMount() {
      axios.post(
          'https://platform.cloud.coveo.com/rest/search/v2?organizationId=mycoveocloudv2organizationg8tp8wu3',
          {
              q: '@tpcouleur==Rouge'
          },
          {
              headers: this.headers
          }).then(
              (response) => {
                console.log(response)
                this.setState({
                    items: response.data.results,
                    response: response,
                    isLoaded: true,
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
        const { error, items, isLoaded } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            if (items.length > 0) {
                return ( items.map( item => ( <ProductCard key={item.uniqueId} item={item} /> ) ) )
            } else {
                return <div></div>
            }
        }
    }
}