import React, { Component } from 'react';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>id = {this.props.match.params.id}</h1>;
  }
}
