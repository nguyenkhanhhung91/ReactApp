import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Store from './Store';

class AddModal extends Component {
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
    
  handleCreate() { 
      var note={
        header: this.refs.header.value,
        message: this.refs.content.value
      }
        Store.dispatch({
          type: 'CREATE_CARD',
          item: note
        });
       fetch('/notes', {
            method: 'POST',           
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
          body: JSON.stringify(note)
        }).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
        })       
      this.setState({show: false});
    }        
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.showModal.bind(this)}>
          Add Card
        </Button>
        <Modal show={this.state.show} onHide={this.hideModal.bind(this)} bsSize="large" backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">New Card</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
              <div className="form-group">
                    <input type="header" className="form-control wide" ref="header" placeholder="Enter header"></input><br/></div>
                    <div className="form-group">
                    <textarea className="form-control custom-height-modal" ref="content" placeholder="Enter content"></textarea></div> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCreate.bind(this)}>Create</Button>  
            <Button onClick={this.hideModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;