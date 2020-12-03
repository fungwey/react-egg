import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem1 extends Component {
  static defaultProps = {
    // 定义默认属性值
    name: 'liet-item1',
  };

  static propType = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.handelItem('item1');
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1--{this.props.name}</h1>
      </div>
    );
  }
}
