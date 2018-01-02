import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
          <div className="container">   
            <h1>Login Form</h1><br/>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input type="email" className="form-control wide" id="emailInput" placeholder="Email"></input>            
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" className="form-control wide" id="passwordInput" placeholder="Password"></input>   
                </div>
                <Button type="submit">Submit</Button>
            </div>      
    );
  }
}

export default Login;
