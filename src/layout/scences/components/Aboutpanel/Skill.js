import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Skill extends Component {
   render() {     
    const title = (
        <h3>Skill</h3>
    );
    return (
         <Panel header={title} bsStyle="info">
            <p>Java, C++, MySQL , HTML, CSS, Bootstrap, JavaScript,  Nodejs, Express, React, Assembly MIPS, LogicWorks. </p>
        </Panel>                 
    );
  }   
}

export default Skill;