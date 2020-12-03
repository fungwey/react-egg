import React, { Component, PureComponent } from 'react';
/**
 * PureComponent 只能监控浅数据
 */
export default class ComponentOld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        id: 1,
      },
    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate(props, state, snapshot) {
    console.log('componentDidUpdate');
  }
  /**
   * PureComponent
   *
   */
  // shouldComponentUpdate(props, state) {
  //   console.log('shouldComponentUpdate', props, state);
  //   if (state !== 'demo' && this.state.text !== state.text) {
  //     return true;
  //   }
  //   return false;
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount');
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
    return <div onClick={this.handleClick}>ComponentOld-- {this.state.text.id}</div>;
  }
}
