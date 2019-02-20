// @flow
import React, { Component } from 'react';
import { Item, Label, Input } from 'native-base';

export default class InputItem extends Component {
  static defaultProps = {
    defaultValue: false,
    label: '',
  };

  /*  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
  } */

  onValueChange = () => {
    /*    const { onValueChange } = this.props;
    this.setState(
      state => ({ value: !state.value }),
      onValueChange,
    ); */
  };

  render() {
    const {
      id, label, isPassword, maxLength,
    } = this.props;

    return (
      <Item
        key={id}
        floatingLabel
      >
        <Label>{label}</Label>
        <Input
          secureTextEntry={isPassword}
          maxLength={maxLength || 50}
        />
      </Item>
    );
  }
}
