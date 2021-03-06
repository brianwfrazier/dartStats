import React , { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.counter = {
            count: 0
        };
    }
  static defaultProps = {
      jump: 2
  };

  static propTypes = {
      jump: PropTypes.number
  };

 
  incrementCount = () => {
      this.setCounter( { count: this.counter.count + this.props.jump });
  };

  render() {
    return (
        <div >
            <h1>Count: {this.counter.count}</h1>
            <h2>Increment size: {this.props.jump}</h2>
            <button type="button" onClick={this.incrementCount}>Increment</button>
        </div>
    );
  }
}