import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
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

  static defaultProps = {
    onChange() {},
    onSubmit() {},
    value: {},
  };

  static childContextTypes = {
    onChange: PropTypes.func,
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

  getChildContext() {
    return {
      onChange: this.onChange,
      value: this.props.value,
    };
  }

  onChange = (name, value) => {
    this.props.onChange(name, value);
  };

  onSumbit = event => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <form onSubmit={this.onSumbit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
