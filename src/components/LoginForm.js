import React, { Component } from 'react';
import Input from './input';
import Submit from './submit';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    };
  }
render(props){
  
  function handleChange(event) {
    let change = event.target.value;
    let name = event.target.name;
    this.setState(state => ({
      name: name
    }))
    /*
    this.setState(state => ({
      event.target.name: event.target.value
    }));
    */
    console.log("Got " + change + " event.");
  }

  function handleSubmit(event){
    if(event.state.username !== '' && event.state.password !== ''){
      this.setState(state => ({
        isLoggedIn: true
      }));
      this.props.logIn.bind(this,this.state.username,this.state.password);
    }
    console.log("User: " + this.state.username);
    console.log("Password: " + this.state.password);
  }

  function FormField() {
    return props.objects.map((object) => (
      <Input
      name={object.name} /** So the map method doesn't show a warning in console */
      placeholder={object.placeholder} 
      type={object.type} 
      required={object.required} 
      onChange={handleChange}
      onSubmit={handleSubmit}
      key={object.key}
      />
    ));
  }

      /*
      if(this.state.isLoggedIn){
        return <Link to="/">
    }*/
  return (
    <div>

      <FormField/>
      <Submit onSubmit={handleSubmit} value="Submit"/>
    </div>
    );
  }
      /**
       * {name, placeholder, type, required}
       */

}