// @flow
import React, { Component } from 'react';
import {
  Text,
  Switch,
} from 'react-native';
import { Item, Left, Right } from 'native-base';

export default class SwitchItem extends Component {
  static defaultProps = {
    defaultValue: false,
    label: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
  }

  onValueChange = () => {
    const { onValueChange } = this.props;
    this.setState(
      state => ({ value: !state.value }),
      onValueChange,
    );
  };

  render() {
    const { label } = this.props;
    const { value } = this.state;

    return (
      <Item>
        <Left>
          <Text>{label}</Text>
        </Left>
        <Right>
          <Switch value={value} onValueChange={this.onValueChange} />
        </Right>
      </Item>
    );
  }
}
