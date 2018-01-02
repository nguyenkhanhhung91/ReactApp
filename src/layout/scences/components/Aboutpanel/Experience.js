import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Experience extends Component {
  render() {     
    const title = (
        <h3>Experience</h3>
    );
    return (
         <Panel header={title} bsStyle="info">
            <p>SEMA group, Sydney, Australia, 2011</p>    
            <li>Data collection, input and correction for the Myschool 2.0 project, a website allows educators to share information about school achievements, characteristics, and other valuable information to help parents make informed decisions about  their kids' education. </li>
        </Panel>                 
    );
  }      
}

export default Experience;