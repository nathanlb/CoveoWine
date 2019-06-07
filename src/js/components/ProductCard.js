import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'

export default class ProductCard extends Component {

	constructor() { 
		super()

		this.state = {

		}
	}

	style = {
        width: '18rem',
        height: '20rem',
        margin: '1rem',
	}

	render() {
		return(
			<Card style={this.style}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}