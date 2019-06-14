import React, {Component} from 'react'
import axios from 'axios'

import ProductCard from './ProductCard'
import Spinner from 'react-bootstrap/Spinner'
import PairingTool from '../../utils/PairingTool'

import KEYS from '../../secret'

export default class ProductFetcher extends Component {

    constructor(props) { 
        super(props)

        this.state = {
            error: null,
            items: [],
            response: {},
            isLoaded: false,
        }

        this.pairingTool = new PairingTool()
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

    url = 'https://platform.cloud.coveo.com/rest/search/v2?organizationId=mycoveocloudv2organizationg8tp8wu3'

    styles = {
        spinnerWrapper: {
            position: 'absolute',
            display: 'block',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto',
            top: '50%',
            left: 'calc(50% + 10rem)'
        },
    }

    sortItems = (items) => {
        const { ordering } = this.props.appState

        if (ordering != null){
            switch(ordering){
                case 0:
                    return items.sort( (a,b) => { return a.title.localeCompare(b.title) } )
                case 1:
                    return items.sort( (a,b) => { return b.title.localeCompare(a.title) } )
                case 2:
                    return items.sort( (a,b) => { return a.raw.tpprixnum - b.raw.tpprixnum } )
                case 3:
                    return items.sort( (a,b) => { return b.raw.tpprixnum - a.raw.tpprixnum } )
            }
        }
        return items
    }

    componentDidMount() {
      let rawParams = {
          food: this.props.appState.food,
          range: this.props.appState.priceRange,
          searchString: this.props.appState.searchString,
      }
      axios.post(
          this.url,
          this.pairingTool.getQuery(rawParams),
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
        const { error, isLoaded } = this.state;
        let { items } = this.state

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
              <div style={this.styles.spinnerWrapper}>
                <Spinner animation="border" size='lg' variant="info"/>
              </div>
            )
        } else {
            if (items.length > 0) {
                items = this.sortItems(items)
                return ( items.map( item => ( <ProductCard key={item.uniqueId} item={item} /> ) ) )
            } else {
                return <div></div>
            }
        }
    }
}