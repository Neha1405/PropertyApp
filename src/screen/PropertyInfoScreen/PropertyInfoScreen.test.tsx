import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PropertyInfoScreen from './PropertyInfoScreen';

describe('App Component', () => {
  it('renders horizontal list and expands content on item selection', () => {
    const {getByText, queryByText} = render(<PropertyInfoScreen />);

    // Check if the horizontal list items are rendered
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(getByText('Item 3')).toBeTruthy();
    expect(getByText('Item 4')).toBeTruthy();
    expect(getByText('Item 5')).toBeTruthy();
    expect(getByText('Item 6')).toBeTruthy();
    expect(getByText('Item 7')).toBeTruthy();
    expect(getByText('Item 8')).toBeTruthy();

    // Select an item and check if the expand component renders correct content
    fireEvent.press(getByText('Item 1'));
    expect(getByText('Details for 1')).toBeTruthy();
    expect(getByText('This is the detailed content for Item 1.')).toBeTruthy();
  });
});
