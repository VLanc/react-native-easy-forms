// @flow
import React, { PureComponent } from 'react';
import {
  Item, Input, Label, Form, Content,
} from 'native-base';

import { StyleSheet } from 'react-native';
import SwitchItem from './SwitchItem';

const styles = StyleSheet.create({
  formLabel: {
    color: '#000',
  },
});

export default class RNFormsConstructor extends PureComponent {
  static defaultProps = {
    type: 'input',
    label: '',
    placeholder: '',
    maxLength: 10,
    isRequired: false,
    isEmail: false,
    isPassword: false,
  };

  render() {
    const { fields } = this.props;

    return (
      <Content padder>
        <Form>
          {fields.map((field) => {
            switch (field.type) {
              case 'input':
                return (
                  <Item
                    key={field.id}
                    stackedLabel
                  >
                    <Label style={styles.formLabel}>{field.label}</Label>
                    <Input
                      secureTextEntry={field.isPassword}
                      placeholder={field.placeholder}
                      maxLength={field.maxLength || 50}
                    />
                  </Item>);
              case 'switch':
                return (
                  <SwitchItem
                    key={field.id}
                    defaultValue={field.defaultValue}
                    label={field.label}
                    onValueChange={field.onValueChange}
                  />
                );
              default:
                return null;
            }
          })}
        </Form>
      </Content>

    );
  }
}
