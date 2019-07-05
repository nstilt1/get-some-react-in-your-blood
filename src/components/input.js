import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <input 
        name={this.props.name}
        placeholder={this.props.placeholder}
        required={this.props.required}
        type={this.props.key} 
        value={this.state.value} 
        onChange={this.onChange}
        ></input>
      </div>
      /** {name, placeholder, type, required} */
    )
  }
}
