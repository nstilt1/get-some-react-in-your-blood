import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './containers/login';



class App extends Component {
  state = {
    isLoggedIn: false,
    route: '/login',
    component: 'Login'
    }

  logIn = () => {
    console.log("Logged in");
    this.setState({
      
      isLoggedIn: true,
      route: '/home',
      component: 'Home'
    });
  };
  
  render() {
    return (
      <div>
        <Router>
          <Route exact path={this.state.route} render={props => (
                <React.Fragment>
                  <Login logIn={this.logIn} objects={this.state.formDetails} />
                </React.Fragment>
              )}/>
        </Router>
      </div>
    );
  }
}

export default App;
