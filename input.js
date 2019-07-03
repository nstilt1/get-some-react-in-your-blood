import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <input type={this.props.key} value={this.state.value} ></input>
      </div>
      /** {name, placeholder, type, required} */
    )
  }
}
