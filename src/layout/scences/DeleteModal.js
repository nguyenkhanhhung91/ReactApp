import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Store from './Store';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
  }
  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }    
  handleDelete() {       
      var head= this.props.header
        Store.dispatch({
          type: 'DELETE_CARD',
          index: this.props.index,            
        });
      fetch('/notes', {
            method: 'delete',           
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
          body: JSON.stringify({
            header: head,
          })
        }).then(function(response) {         
            console.log('Request status code: ', response.statusText, response.status, response.type);
        })       
      
       this.setState({show: false});
    }    
    render() {
        return (  
             <div>
        <Button bsStyle="primary" onClick={this.showModal.bind(this)}>
          Delete Card
        </Button>
        <Modal show={this.state.show} onHide={this.hideModal.bind(this)} bsSize="small" backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Delete card number {this.props.index}</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
              Are you sure to delete this card?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleDelete.bind(this)}>Delete</Button>  
            <Button onClick={this.hideModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}
}

export default DeleteModal;