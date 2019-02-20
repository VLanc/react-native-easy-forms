// @flow
import React, { Component } from 'react';
import { Item, Picker, Icon } from 'native-base';

export default class SelectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: undefined,
    };
  }

  onValueChange = (value) => {
    const { onValueChange } = this.props;
    this.setState({ selectedValue: value },
      onValueChange);
  };

  render() {
    const { items, placeholder } = this.props;
    const { selectedValue } = this.state;

    return (
      <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: undefined }}
          placeholder={placeholder}
          placeholderStyle={{ color: '#bfc6ea' }}
          placeholderIconColor="#007aff"
          selectedValue={selectedValue}
          onValueChange={this.onValueChange}
        >
          {items.map(item => (
            <Picker.Item
              key={item.id}
              label={item.label}
              value={item.label}
            />
          ))}
        </Picker>
      </Item>
    );
  }
}
