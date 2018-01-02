import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Project extends Component {
   render() {     
    const title = (
        <h3>Project</h3>
    );
    return (
         <Panel header={title} bsStyle="info">
            <ul>  
                <li>Java and Java FX:  Designed and built - Heptalion/Cadyland game with user interface. Software: Netbean </li>       <li>C++:  Designed and built -- tic tac toe game, elevator, parking lot, drinking machine simulation, and customer service queue management application. Software: Visual Studio</li>           
                <li>HTML, CSS, JavaScript, Node.Js, Express,  React:  built an server based web application to emulate leaving notes on a refrigerator door, online quizzes. </li>    
                <li>Assembly language MIPS: Design and build the checker game, guessing game. Software: mipsym  </li>  
                <li>Simulation CPU Architecture. Built a simulated three-stage pipeline CPU (non-floating point architecture). Software:  LogicWorks </li>
            </ul>
        </Panel>                 
    );
  }      
}

export default Project;