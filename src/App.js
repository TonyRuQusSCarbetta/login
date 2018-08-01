import React, { Component } from 'react';
import SignIn from './SignIn';
import HomePage from './HomePage';
import './App.css';

class App extends Component {
constructor() {
  super()
  this.state={
    route: 'signin'
  }
}

onRouteChange = () => {
  this.setState({route: 'home'})
}

  render() {
    return (
      <div className="App">

        {
          this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange}/>
          : <HomePage/>
        }

      </div>
    );
  }
}

export default App;
