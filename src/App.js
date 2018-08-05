import React, { Component } from 'react';
import SignIn from './SignIn';
import HomePage from './HomePage';
import Register from './Register'
import './App.css';

class App extends Component {
constructor() {
  super()
  this.state={
    route: SignIn
  }
}

onRouteChange = (route) => {
  this.setState({route: route})
}

  render() {
    return (
      <div className="App">

        {
          this.state.route === SignIn
          ? <SignIn onRouteChange={this.onRouteChange}/>
          :
            (
              this.state.route === Register
              ? <Register onRouteChange={this.onRouteChange}/>
              : <HomePage onRoutheChange={this.onRouteChange}/>
            )
        }


      </div>
    );
  }
}

export default App;
