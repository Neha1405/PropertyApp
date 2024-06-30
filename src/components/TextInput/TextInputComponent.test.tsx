// TextInputComponent.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextInputComponent from './TextInputComponent';

describe('TextInputComponent', () => {
  it('renders correctly with placeholder', () => {
    const {getByPlaceholderText} = render(
      <TextInputComponent
        placeholder="Enter text here"
        value=""
        onChangeText={() => {}}
      />,
    );

    expect(getByPlaceholderText('Enter text here')).toBeTruthy();
  });

  it('calls onChangeText when text is changed', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <TextInputComponent
        placeholder="Enter text here"
        value=""
        onChangeText={onChangeTextMock}
      />,
    );

    const input = getByPlaceholderText('Enter text here');
    fireEvent.changeText(input, 'Hello');

    expect(onChangeTextMock).toHaveBeenCalledWith('Hello');
  });

  it('displays the correct value', () => {
    const {getByDisplayValue} = render(
      <TextInputComponent
        placeholder="Enter text here"
        value="Hello"
        onChangeText={() => {}}
      />,
    );

    expect(getByDisplayValue('Hello')).toBeTruthy();
  });
});
