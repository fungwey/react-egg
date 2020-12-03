import React, { Component } from 'react';

export default class ComponentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        id: 1,
      },
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return state;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return 'getSnapshotBeforeUpdate';
  }

  componentDidUpdate(props, state, snapshot) {
    console.log('componentDidUpdate', props, state, snapshot);
  }

  handleClick = () => {
    this.setState({
      text: {
        id: 2,
      },
    });
  };

  render() {
    console.log('render');
    return <div onClick={this.handleClick}>ComponentNew-- {this.state.text.id}</div>;
  }
}
