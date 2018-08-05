import React, { Component } from 'react';
import './SignIn.css';
import HomePage from './HomePage';

//retrieve the value of user's input from form
// target the value and push it into empty arrow by setting the state

class Register extends Component {
  constructor() {
    super()
    this.state= {
      userInfo: [],
      userInput: '',
    }
    this.Change = this.Change.bind(this);
  }

  Change = (e) => {
    this.setState({
      userInput: e.target.value
    })
    console.log(this.state.userInput);
  }

  render() {
    return (
      <div className="row">
          <div className="col-12">
            <div className="SignIn">

              <h1>Register</h1>

              <input type="text"
              ref="Name"
              onChange={this.Change}
              placeholder="Name"/><br/>

              <input type="email"
              ref="email"
              onChange={this.Change}
              placeholder="Email"/><br/>

              <input type="text"
              ref="userPassword"
              placeholder="Password"/><br/>

              <div
              className="btn"
              onClick={() => this.props.onRouteChange(HomePage)}
              type="submit">
              Submit
              </div>



            </div>
        </div>
      </div>
    );
  }
}

export default Register;
