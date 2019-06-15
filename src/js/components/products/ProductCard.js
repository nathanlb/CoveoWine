import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

import Colors from '../../utils/ColorPalette'

export default class ProductCard extends Component {

	constructor() { 
		super()
	}

  styles = {
        card: {
            width: '19rem',
            height: '14rem',
            margin: '1rem',
            padding: '5px',
            minWidth: '17.9rem',
        },
        row: {
            width: '100%',
            height: '100%',

            margin: '0px',
        },
        imgCol: {
            height: '100%',
            padding: '0px',
            margin: '0px',
        },
        infoCol: {
            height: '100%',
            padding: '0px',
            margin: '0px',
        },
        img: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
        },
        cardBody: {
            padding: '5px',
        },
        wineBadge: {
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
        },
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
        if (this.props.item.raw.tpregion === undefined || `${this.props.item.raw.tpregion}, ${this.props.item.raw.tppays}`.length > 25)
            return this.props.item.raw.tppays
            
        return `${this.props.item.raw.tpregion}, ${this.props.item.raw.tppays}`
    }

    //"Pastille de goût :"

	render() {
		return(
        <Card style={this.styles.card} className="shadow-box-example z-depth-3">
            <Row style={this.styles.row}>
                <Col xs={4} style={this.styles.imgCol}>
                    <Card.Img style={this.styles.img} src={this.props.item.raw.tpthumbnailuri} />
                </Col>
                <Col style={this.styles.infoCol}>
                    <Card.Body style={this.styles.cardBody}>
                        <Card.Title
                            style={{fontSize: '16px', height: '4rem', maxHeight: '4rem'}}>
                            {(this.props.item.title.length <= 70) ? this.props.item.title : `${this.props.item.title.substring(0, 70)}...`}
                        </Card.Title>
                        <Card.Text 
                            className="text-right"
                            style={{fontSize: '22px', marginBottom: '5px'}}>
                            {`$${this.props.item.raw.tpprixnum.toFixed(2)}`}
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item 
                                className="text-right"
                                style={{padding: '5px', fontSize: '15px'}}>
                                <Badge variant="default" className="mr-1">{(this.props.item.raw.tpcepagenomsplitgroup != undefined) ? this.props.item.raw.tpcepagenomsplitgroup.split(/[\s;]+/)[0] : ""}</Badge>
                                <Badge variant="secondary">{this.props.item.raw.tpcategorie}</Badge>
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