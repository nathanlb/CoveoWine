import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

import Colors from '../ColorPalette'

export default class ProductCard extends Component {

	constructor() { 
		super()
	}

	cardStyle = {
        width: '17.9rem',
        height: '14rem',
        margin: '1rem',
        padding: '5px',
        minWidth: '17.9rem'
    }
    rowStyle = {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        margin: '0px',
    }
    imgColStyle = {
        height: '100%',
        padding: '0px',
        margin: '0px',
    }
    infoColStyle = {
        height: '100%',
        padding: '0px',
        margin: '0px',
    }
    imgStyle = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    }
    cardBodyStyle = {
        padding: '5px',
    }

    wineBadgeStyles = {
        'Rouge': {
            backgroundColor: Colors.wineType.redWine,
            color: 'white'
        },
        'Blanc': {
            backgroundColor: Colors.wineType.whiteWine,
            color: 'black',
        },
        'Rosé': {
            backgroundColor: Colors.wineType.roseWine,
            color: 'black',
        }
    }

    limitedQtyBadge = () => {
        if (this.props.item.raw.tpquantitelimite == "true"){
            return (
                <Badge variant="info">
                    Quantité Limitée
                </Badge>
            )
        }
    }

    locationString = () => {
        if (this.props.item.raw.tppays === undefined)
            return "Highgarden, Westeros"
        if (this.props.item.raw.tpregion === undefined)
            return this.props.item.raw.tppays
            
        return `${this.props.item.raw.tpregion}, ${this.props.item.raw.tppays}`
    }

    //"Pastille de goût :"

	render() {
		return(
                <Card style={this.cardStyle} className="shadow-box-example z-depth-3">
                    <Row style={this.rowStyle}>
                        <Col xs={4} style={this.imgColStyle}>
                            <Card.Img style={this.imgStyle} src={this.props.item.raw.tpthumbnailuri} />
                        </Col>
                        <Col style={this.infoColStyle}>
                            <Card.Body style={this.cardBodyStyle}>
                                <Card.Title
                                    style={{fontSize: '16px', height: '3.5rem', maxHeight: '3.5rem'}}>
                                    {this.props.item.title}
                                </Card.Title>
                                <Card.Text 
                                    className="text-right"
                                    style={{fontSize: '22px', marginBottom: '5px'}}>
                                    {this.props.item.raw.tpprixnormal}
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item 
                                        className="text-right"
                                        style={{padding: '5px', fontSize: '15px'}}>
                                        <Badge
                                            style={this.wineBadgeStyles[this.props.item.raw.tpcouleur]}
                                            variant="secondary">
                                            {`${this.props.item.raw.tpcategorie}`}
                                        </Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        className="text-right"
                                        style={{padding: '5px', fontSize: '12px'}}>
                                        {this.locationString()}
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        className="text-right"
                                        style={{padding: '5px', fontSize: '13px'}}>
                                        {this.limitedQtyBadge()}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Col>
                    </Row>
                    <a href={this.props.item.clickUri} className="stretched-link"></a>
                </Card>
		)
	}
}