import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    value: PropTypes.object,
  };

  static defaultProps = {
    onChange() {},
    onSubmit() {},
    value: {},
  };

  static childContextTypes = {
    change: PropTypes.func,
    value: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
      ]),
    ),
  };

  change = (name, after, before) => {
    if (after !== before) {
      this.props.onChange(name, after, before);
    }
  };

  getChildContext() {
    return {
      change: this.change,
      value: this.props.value,
    };
  }

  handleSubmit = () => {
    console.log('handleSubmit');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
