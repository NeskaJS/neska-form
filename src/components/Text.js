import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  static contextTypes = {
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

  handleChange = event => {
    this.context.change(this.props.name, event.target.value);
  };

  render() {
    const { name } = this.props;
    const { value } = this.context;

    return (
      <input
        name={name}
        type="text"
        onChange={this.handleChange}
        value={value[name] || ''}
      />
    );
  }
}

export default Text;
