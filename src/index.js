// @flow
import React, { PureComponent } from 'react';
import {
  Form, Content,
} from 'native-base';

import SwitchItem from './SwitchItem';
import InputItem from './InputItem';
import SelectItem from './SelectItem';

export default class RNFormsConstructor extends PureComponent {
/*  static defaultProps = {
    type: 'input',
    label: '',
    placeholder: '',
    maxLength: 10,
    isRequired: false,
    isEmail: false,
    isPassword: false,
  }; */

  render() {
    const { fields } = this.props;

    return (
      <Content padder>
        <Form>
          {fields.map((field) => {
            switch (field.type) {
              case 'input':
                return (
                  <InputItem
                    key={field.id}
                    {...field}
                  />
                );
              case 'switch':
                return (
                  <SwitchItem
                    key={field.id}
                    defaultValue={field.defaultValue}
                    label={field.label}
                    onValueChange={field.onValueChange}
                  />
                );
              case 'select':
                return (
                  <SelectItem
                    key={field.id}
                    {...field}
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
