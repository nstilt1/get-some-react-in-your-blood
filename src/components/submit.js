import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <button onClick={this.props.onSubmit}>{this.props.value}</button>
    )
  }

}
