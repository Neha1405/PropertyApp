import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SelectionTabList from './selectionTab';

describe('SelectionTabList Component', () => {
  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
  ];

  it('renders all items', () => {
    const {getByText} = render(
      <SelectionTabList
        data={data}
        selectedItem={null}
        onSelectItem={() => {}}
      />,
    );

    data.forEach(item => {
      expect(getByText(item.title)).toBeTruthy();
    });
  });

  it('highlights selected item', () => {
    const {getByText} = render(
      <SelectionTabList data={data} selectedItem="2" onSelectItem={() => {}} />,
    );

    const selectedItem = getByText('Item 2');
    expect(selectedItem.parent).toHaveStyle({backgroundColor: '#3498db'});
  });

  it('calls onSelectItem when an item is pressed', () => {
    const onSelectItemMock = jest.fn();
    const {getByText} = render(
      <SelectionTabList
        data={data}
        selectedItem={null}
        onSelectItem={onSelectItemMock}
      />,
    );

    const item = getByText('Item 2');
    fireEvent.press(item);

    expect(onSelectItemMock).toHaveBeenCalledWith('2');
  });

  it('scrolls to selected item when scroll button is pressed', () => {
    const {getByText} = render(
      <SelectionTabList data={data} selectedItem="2" onSelectItem={() => {}} />,
    );

    const scrollButton = getByText('Scroll to Selected');
    fireEvent.press(scrollButton);

    // Add assertions to check if the item is scrolled into view
  });
});
