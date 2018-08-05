import React, { Component } from 'react';
import './HomePage.css'
import SignIn from './SignIn'

class HomePage extends Component {
  constructor() {
    super()
    this.state= {
      
    }
  }

  render() {
    return (
      <div className="row">
          <div className="col-11 bg-success">
            <h1>Welcome to the Home Page!</h1>
          </div>
          <div className="col-1 bg-success">
          <p className="signOut"
          onClick={() => this.props.onRouteChange(SignIn)}>Sign Out</p>
          </div>
        </div>
    );
  }
}

export default HomePage;
