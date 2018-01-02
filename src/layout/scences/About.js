import React from "react";
import Education from './components/Aboutpanel/Education';
import Skill from './components/Aboutpanel/Skill';
import Experience from './components/Aboutpanel/Experience';
import Honor from './components/Aboutpanel/Honor';
import Coursework from './components/Aboutpanel/Coursework';
import Project from './components/Aboutpanel/Project';
import { Tabs, Tab, Image } from 'react-bootstrap';

export default class About extends React.Component{      
     render() {            
        return <div className="container"> 
            <panel>
                <div className="row"> 
                     <div className="col-md-4"><h3>About me:</h3></div>
                     <Image src={require("./components/images/Avatar.JPG")} thumbnail responsive width='12%'></Image>                   
                </div>
                <div className="row">
                    <div className="col-md-4">Hung Nguyen</div></div>   
                <div className="row">    
                    <div className="col-md-4"><address>Santa Clara, CA <a href='mailto:#'>nguyenkhanhhung91@gmail.com</a></address>  </div> </div>                          
              </panel>          
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Education"><Education /></Tab>
                <Tab eventKey={2} title="Skill"><Skill /></Tab>
                <Tab eventKey={3} title="Honor"><Honor /></Tab>
                <Tab eventKey={4} title="Experience"><Experience /></Tab>
                <Tab eventKey={5} title="Coursework"><Coursework /></Tab>
                <Tab eventKey={6} title="Project"><Project /></Tab>
              </Tabs>
           </div> 
     }     
}