import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ExpandCollapseComponent from './ExpandCollapseComponent';
import {Text} from 'react-native';

describe('ExpandCollapseComponent', () => {
  it('renders title and hides content initially', () => {
    const {getByText, queryByText} = render(
      <ExpandCollapseComponent title="Test Title">
        <Text>Hidden Content</Text>
      </ExpandCollapseComponent>,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(queryByText('Hidden Content')).toBeNull();
  });

  it('shows content when expanded', () => {
    const {getByText, queryByText} = render(
      <ExpandCollapseComponent title="Test Title">
        <Text>Hidden Content</Text>
      </ExpandCollapseComponent>,
    );

    fireEvent.press(getByText('Test Title'));

    expect(getByText('Hidden Content')).toBeTruthy();
  });

  it('hides content when collapsed', () => {
    const {getByText} = render(
      <ExpandCollapseComponent title="Test Title">
        <Text>Hidden Content</Text>
      </ExpandCollapseComponent>,
    );

    const title = getByText('Test Title');
    fireEvent.press(title); // Expand
    fireEvent.press(title); // Collapse

    expect(queryByText('Hidden Content')).toBeNull();
  });
});
