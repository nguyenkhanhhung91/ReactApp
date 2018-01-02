import React, { Component } from 'react';
import "./stylesheet.css";
import Menu from "./layout/Menu";
import Content from "./layout/Content";

class App extends Component {
  render() {     
    return ( 
        <div className="App">         
            <Menu />
            <Content />
       </div>
    );
  }
}

export default App;
