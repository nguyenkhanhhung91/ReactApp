import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Education extends Component {
  render() {     
    const title = (
        <h3>Education</h3>
    );
    return (
         <Panel header={title} bsStyle="info">
             <ul>
                <li>September 2014 to Present: California State University, East Bay, CA</li>    
                <p>Bachelor of Computer Science,  Software engineering , expected March 2018 </p>
                <li>September 2008 to December 2010: University of South Australia </li>    
                <p>Bachelor of Business Administration </p>
                <li>August 2007 to June 2008: Kaplan-Asia Pacific Management Institute, Singapore </li>    
                <p>Diploma in Business Administration </p>    
            </ul>
        </Panel>                 
    );
  }
}

export default Education;