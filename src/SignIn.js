import React, { Component } from 'react';
import './SignIn.css';
import HomePage from './HomePage';

//retrieve the value of user's input from form
// target the value and push it into empty arrow by setting the state

class SignIn extends Component {
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

              <h1>Sign In</h1>

              <input type="text"
              ref="userName"
              onChange={this.Change}
              placeholder="User Name"/><br/>

              <input type="text"
              ref="userPassword"
              placeholder="Password"/><br/>

              <div
              className="btn"
              onClick={() => this.props.onRouteChange(HomePage)}>
              login
              </div>

              

            </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
