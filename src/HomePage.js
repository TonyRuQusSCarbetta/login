import React, { Component } from 'react';
import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super()
    this.state= {
      name: "HomePage"
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
          onClick={this.props.onRouteChange}>Sign Out</p>
          </div>
        </div>
    );
  }
}

export default HomePage;