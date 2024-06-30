import {Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './styles';
import {ExpandCollapseComponent, SelectionTab} from '../../components';
import listData from '../Dashboard/data.json';

const PropertyInfoScreen: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('1');
  const data = listData.data;

  const onSelectItem = (id: string) => {
    setSelectedItem(id);
  };

  const renderExpandableContent = (id: string) => {
    switch (id) {
      case '1':
        return <Text>This is the detailed content for Item 1.</Text>;
      case '2':
        return <Text>This is the detailed content for Item 2.</Text>;
      case '3':
        return <Text>This is the detailed content for Item 3.</Text>;
      case '4':
        return <Text>This is the detailed content for Item 4.</Text>;
      case '5':
        return <Text>This is the detailed content for Item 5.</Text>;
      case '6':
        return <Text>This is the detailed content for Item 6.</Text>;
      case '7':
        return <Text>This is the detailed content for Item 7.</Text>;
      case '8':
        return <Text>This is the detailed content for Item 8.</Text>;
      // Add cases for other items as needed
      default:
        return <Text>No content available.</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <SelectionTab
        data={data}
        selectedItem={selectedItem}
        onSelectItem={onSelectItem}
      />
      {selectedItem && (
        <ExpandCollapseComponent title={`Details for ${selectedItem}`}>
          {renderExpandableContent(selectedItem)}
        </ExpandCollapseComponent>
      )}
    </View>
  );
};

export default PropertyInfoScreen;
