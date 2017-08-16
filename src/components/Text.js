import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  static propTypes = {
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

  onChange = event => {
    this.context.onChange(this.props.name, event.target.value);
  };

  render() {
    const { name } = this.props;
    const { value } = this.context;

    return (
      <input
        name={name}
        type="text"
        onChange={this.onChange}
        value={value[name] || ''}
      />
    );
  }
}

export default Text;
