import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Honor extends Component {
  render() {     
    const title = (
        <h3>Honor</h3>
    );
    return (
         <Panel header={title} bsStyle="info">
            <ul>  
                <li>Scholarship: Department Scholar in Computer Science for the academic year 2016-2017 </li>            
                <li>Golden Key National Honor Society invitation </li>           
                <li>Current B.S. Computer Science Major GPA:  3.807/4.0 </li>    
                <li>Dean's list 2015-2016, Honor's list 2016-2017 </li>    
            </ul>
        </Panel>                 
    );
  }  
}

export default Honor;