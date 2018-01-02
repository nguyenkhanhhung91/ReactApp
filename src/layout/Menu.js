import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Menu extends Component {       
    Homehandler(){
    browserHistory.push('/');
}    
    Loginhandler(){
    browserHistory.push('/Login');
}    
    Noteshandler(){
    browserHistory.push('/Notes');
}    
    Abouthandler(){
    browserHistory.push('/About');
}    
    Contacthandler(){
    browserHistory.push('/Contact');
}    
    
  render() {      
    return (
        <div className="TopMenu">
            <button className="btn-custom btn-blue" onClick={this.Homehandler.bind(this)}>Home </button>     
            <button className="btn-custom btn-blue" onClick={this.Loginhandler.bind(this)}>Login </button>       
            <button className="btn-custom btn-blue" onClick={this.Noteshandler.bind(this)}>Notes </button>  
            <div className="nav navbar-nav navbar-right">
            <a onClick={this.Abouthandler.bind(this)}>About </a>
            <a onClick={this.Contacthandler.bind(this)}>Contact</a>
            </div>
        </div>     
    );
  }
}

export default Menu;