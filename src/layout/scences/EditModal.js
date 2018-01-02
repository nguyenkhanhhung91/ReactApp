import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Store from './Store';

class EditModal extends Component {
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
  handleEdit() {        
      var header= this.props.header;
      var message= this.props.message;
        Store.dispatch({
          type: 'EDIT_CARD',
          item: {
          index: this.props.index,      
          header: this.refs.header.value,
          message: this.refs.content.value
      }
        });
       fetch('/notes', {
            method: 'PUT',           
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
          body: JSON.stringify({    
          header: header,
          message: message
      })
        }).then(response => response.json()).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
        })            
      this.setState({show: false});
    }        
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.showModal.bind(this)}>
          Edit Card
        </Button>
        <Modal show={this.state.show} onHide={this.hideModal.bind(this)} bsSize="large" backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Edit Card Number {this.props.index}</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
              <div className="form-group">
                    <textarea type="header" className="form-control wide" ref="header">{this.props.header}</textarea><br/></div>
                    <div className="form-group">
                    <textarea className="form-control custom-height-modal" ref="content">{this.props.message}</textarea></div> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleEdit.bind(this)}>Edit</Button>  
            <Button onClick={this.hideModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditModal;