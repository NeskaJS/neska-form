import React, { Component } from 'react';
import { Fieldset, Form, Text } from '../components';

class TextExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
    };
  }

  onChange = (name, newValue) => {
    const value = { ...this.state.value, [name]: newValue };
    this.setState({ value }, () => console.log('onChange', this.state.value));
  };

  onSubmit = () => {
    console.log('onSubmit', this.state.value);
  };

  render() {
    return (
      <Form
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        value={this.state.value}
      >
        <Fieldset name="neska">
          <Text name="oso_polita" />
        </Fieldset>
        <Text name="pepito" />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default TextExp;
