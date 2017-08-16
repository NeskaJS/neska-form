import React, { Component } from 'react';
import { Form, Text } from '../components'

export class TextExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
    };
  }

  onChange = (name, value) => {
    this.setState({ value: { ...this.state.value, [name]: value }})
  };

  onSubmit = () => {
    console.log('onSubmit');
  };

  render() {
    return (
      <Form
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        value={this.state.value}
      >
        <Text name="pepito" />
      </Form>
    );
  }
}

export default TextExp;
