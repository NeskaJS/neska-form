import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fieldset extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    name: PropTypes.string.isRequired,
  };

  static contextTypes = {
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
      value: this.context.value[this.props.name] || {},
    };
  }

  onChange = (field, newValue) => {
    const value = { ...this.context.value[name], [field]: newValue };
    this.context.onChange(this.props.name, value);
  };

  render() {
    const { children, name } = this.props;
    return (
      <fieldset name={name}>
        {children}
      </fieldset>
    );
  }
}

export default Fieldset;
