import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (     
      <div className="container">          
            <h1>Contact </h1>   <br/>
                <div className="contact-form">                     
                    <input type="name" className="form-control wide" placeholder="Name (required)"></input><br/>              
                    <input type="email" className="form-control wide" placeholder="E-Mail (required)"></input><br/>          
                    <input type="subject" className="form-control wide" placeholder="Subject (optional)"></input><br/>       
                    <textarea rows="3" className="form-control wide" id="message" placeholder="Message (required)"></textarea></div><br/>
                    <Button type="submit">Send Message</Button >
                </div>
    );
  }
}

export default Contact;