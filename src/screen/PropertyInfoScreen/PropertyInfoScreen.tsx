import {ScrollView, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './styles';
import {
  ExpandCollapseComponent,
  SelectionTab,
  TextInput,
} from '../../components';
import listData from '../Dashboard/data.json';
import PropertyDetails from './PropertyDetails';

const PropertyInfoScreen: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>('1');
  const data = listData.data;

  const onSelectItem = (id: string) => {
    setSelectedItem(id);
  };

  const PropertyDataInputs = () => {
    return (
      <ExpandCollapseComponent title={'Inspection Report'}>
        <PropertyDetails />
      </ExpandCollapseComponent>
    );
  };

  const SubjectPropertyInfo = () => {
    return (
      <View>
        <ExpandCollapseComponent title={'Inspection Report'}>
          <Text>This is the detailed content for Item 2.</Text>
        </ExpandCollapseComponent>
        <ExpandCollapseComponent title={'Inspection Report'}>
          <Text>This is the detailed content for Itemsdasasddssd.</Text>
        </ExpandCollapseComponent>
      </View>
    );
  };

  const renderExpandableContent = (id: string) => {
    switch (id) {
      case '1':
        return <PropertyDataInputs />;
      case '2':
        return <SubjectPropertyInfo />;
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
      {selectedItem && <View>{renderExpandableContent(selectedItem)}</View>}
    </View>
  );
};

export default PropertyInfoScreen;
