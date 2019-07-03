import React, { Component } from 'react';
import Input from './input';

export default class LoginForm extends Component {
  constructor(props) {
    console.log("constructed loginform")
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    };
  }

  handleChange(event){
    let name = this.event.name;
    this.setState(state => ({
      name: this.name
    }));
    console.log("Got " + name + " event.");
  }

  handleSubmit(event){
    if(event.state.username !== '' && event.state.password !== ''){
      this.setState(state => ({
        isLoggedIn: true
      }));
      this.props.logIn.bind(this,this.state.username,this.state.password);
    }
  }

  render() {

    /*
    if(this.state.isLoggedIn){
      return <Link to="/">
  }*/
    return this.props.objects.map((object) => (
      <Input
      
      key={object.name} /** So the map method doesn't show a warning in console */
      placeholder={object.placeholder} 
      type={object.type} 
      required={object.required} 
      onSubmit={this.handleSubmit}
      />
    ));
    /**
     * {name, placeholder, type, required}
     */
  }

}
