import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // {name, placeholder, type, required}
      formDetails: [
        {
          name: 'Username',
          placeholder: 'Username',
          type: 'username',
          required: true
        },
        {
          name: 'Password',
          placeholder: 'Password',
          type: 'password',
          required: true
        }
      
      ]
  };
    console.log("constructed login container")
    
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <nav>
          <span style={{float: 'right'}}>
            <LoginForm logIn={this.props.logIn} objects={this.state.formDetails} />
            </span>
            </nav>
      </div>
    )
  }

}
