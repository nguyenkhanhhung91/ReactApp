import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from "./scences/Home";
import Login from "./scences/Login";
import About from "./scences/About";
import Contact from "./scences/Contact";
import Notes from "./scences/Notes";

class Content extends Component {
  render() {     
   
    return ( 
        <div >
            <Router history={browserHistory}>
                <Route path='/' component={Home} />
                <Route path='/Login' component={Login} />
                <Route path='/About' component={About} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Notes' component={Notes} />
            </Router>
        </div>    
    );
  }
}

export default Content;
