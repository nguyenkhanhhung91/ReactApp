import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Coursework extends Component {
   render() {     
    const title = (
        <h3>Coursework</h3>
    );
    return (
         <Panel header={title} bsStyle="info">
            <ul>  
                <li>Data Structures, Analysis of Algorithms, Database Architecture</li>            
                <li>Website development, Computer Architecture, Data communication and networking </li>           
                <li>Object oriented programming and design, Operating System, Theory of Automata.  </li>                 
            </ul>
        </Panel>                 
    );
  }      
}

export default Coursework;