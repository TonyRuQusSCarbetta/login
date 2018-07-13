import React, { Component } from 'react';
import './LoginForm.css';

//retrieve the value of user's input from form
// target the value and push it into empty arrow by setting the state

class LoginForm extends Component {
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
            <div className="LoginForm">
            <input type="text" ref="userName"  onChange={this.Change} placeholder="User Name"/><br/>
            <input type="text" ref="userPassword"placeholder="Password"/><br/>
            <div className="btn">login</div>
            <div className="btn">register</div>
            <h1>{this.state.userInput}</h1>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
