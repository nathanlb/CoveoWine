import React, {Component} from 'react'

import PairingForm from './PairingForm'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class PairingModal extends Component {

    constructor() { 
        super()

        this.state = {

        }
    }

    style = {
        
    }

    render() {
      return (
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <PairingForm 
                stateUpdater={this.props.stateUpdater} 
                appState={this.props.appState} 
                type="modal"/>
          </Modal.Body>
        </Modal>
      )
    }
}