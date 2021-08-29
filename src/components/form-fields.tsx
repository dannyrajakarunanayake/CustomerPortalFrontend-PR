import React, { useEffect, useRef } from 'react';
import { Controller, useFormContext, ValidationOptions } from 'react-hook-form';
import {
  InputField,
  InputCreditCard,
  Dropdown,
  SelectableCard,
  InputCreditCardExpiry,
  DropdownWithInput,
  DatePicker,
  TextArea,
} from '@payright/web-components';
import moment from 'moment';

type FieldProps = {
  name: string;
  rules?: ValidationOptions;
  children?: React.ReactNode;
  defaultValue?: string;
};

export const ControlledInputField = ({
  name,
  rules,
  ...rest
}: FieldProps & React.ComponentProps<typeof InputField>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Controller
      name={name}
      onChangeName="handleInputChange"
      rules={rules}
      inputRef={inputRef}
      as={<InputField {...rest} />}
    ></Controller>
  );
};
ControlledInputField.defaultProps = {
  type: 'text',
};

export const ControlledInputCreditCard = ({
  name,
  defaultValue,
  rules,
  ...rest
}: FieldProps & React.ComponentProps<typeof InputCreditCard>) => {
  return (
    <Controller
      defaultValue={defaultValue}
      name={name}
      onChangeName="handleInputChange"
      rules={rules}
      as={<InputCreditCard {...rest} />}
    />
  );
};

export const ControlledDropdown = ({
  value,
  name,
  rules,
  defaultValue,
  ...rest
}: FieldProps & React.ComponentProps<typeof Dropdown>) => {
  return (
    <Controller
      rules={rules}
      name={name}
      onChangeName="handleSelect"
      as={<Dropdown {...rest} value={value} />}
    ></Controller>
  );
};
ControlledDropdown.defaultProps = {
  type: 'select',
};

export const ControlledSelectableCard = ({
  name,
  defaultValue,
  ...rest
}: FieldProps & React.ComponentProps<typeof SelectableCard>) => {
  return (
    <Controller
      valueName="test"
      defaultValue={defaultValue}
      name={name}
      onChangeName="handleInputChange"
      as={<SelectableCard {...rest} />}
    />
  );
};

export const ControlledInputCreditCardExpiry = ({
  name,
  rules,
  ...rest
}: FieldProps & React.ComponentProps<typeof InputCreditCardExpiry>) => {
  return (
    <Controller
      valueName={name}
      name={name}
      rules={rules}
      onChangeName="handleSelect"
      as={<InputCreditCardExpiry {...rest} />}
    />
  );
};

export const ControlledTextArea = ({
  name,
  rules,
  ...rest
}: FieldProps & React.ComponentProps<typeof TextArea>) => {
  return (
    <Controller
      valueName={name}
      name={name}
      rules={rules}
      onChangeName="handleInputChange"
      as={<TextArea {...rest} />}
    />
  );
};

export const ControlledDropdownWithInput = ({
  dropdownName,
  dropdownRules,
  inputName,
  inputRules,
  ...rest
}: {
  dropdownName: string;
  dropdownRules?: ValidationOptions;
  inputName: string;
  inputRules?: ValidationOptions;
} & React.ComponentProps<typeof DropdownWithInput>) => {
  // Wiring up this component with react-hook-form is a bit tricky -- could not
  // use the standard <Controller> method as this component has 2 values and 2 change handlers.
  // Wiring up is done by manually registering 2 form inputs, and using watch() to get and render the values
  // See: Custom Register example in https://react-hook-form.com/advanced-usage/#ControlledmixedwithUncontrolledComponents
  const { setValue, register, watch } = useFormContext();

  useEffect(() => {
    register({ name: dropdownName }, { ...dropdownRules });
    register({ name: inputName }, { ...inputRules });
  }, [register, dropdownName, inputName, dropdownRules, inputRules]);

  const dropdownValue = watch(dropdownName);
  const inputValue = watch(inputName);

  return (
    <DropdownWithInput
      dropdownValue={dropdownValue}
      handleSelect={(option: string) => {
        setValue(dropdownName, option);
      }}
      inputValue={inputValue}
      handleInputChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(inputName, event.target.value);
      }}
      {...rest}
    />
  );
};

export const ControlledDatePicker = ({
  name,
  rules,
  children,
  startYear,
  endYear,
  ...rest
}: FieldProps & React.ComponentProps<typeof DatePicker>) => {
  // Convert JSX to string so it can be used as the label prop
  let label = '';
  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });
  return (
    <Controller
      name={name}
      rules={rules}
      onChange={([e]) => {
        if (e instanceof Date) {
          return moment(e).format('YYYY-MM-DD');
        }

        return '';
      }}
      onChangeName="handleDateChange"
      as={<DatePicker label={label} {...rest} startYear={startYear} endYear={endYear} />}
    />
  );
};
