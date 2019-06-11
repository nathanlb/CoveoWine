import React, {Component} from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import Colors from '../utils/ColorPalette'

export default class GlobalSearchBar extends Component{

    constructor() {
        super()
    }

    buttonStyle = {
        outline: 'none',
        backgroundColor: Colors.wine,
        color: Colors.white,
        boxShadow: 'none'
    }

    render() {
        return(
            <Navbar sticky="top" style={{backgroundColor: Colors.darkgrey, textAlign: 'center', height: '3.5rem'}} className="shadow-box-example z-depth-1">
                {/*<Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>*/}
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width: '40rem'}}/>
                                <Button 
                                    variant="dark"
                                    style={this.buttonStyle}>
                                    Search
                                </Button>
                            </Form>
                        {/*</Col>
                    </Row>
                        </Container>*/}
            </Navbar>
        )
    }
}