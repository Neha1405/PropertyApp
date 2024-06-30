import React, {useRef} from 'react';
import {View, Text, FlatList, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';
import {AppImages} from '../../assets';

interface SelectionTabProps {
  data: {id: string; title: string}[];
  selectedItem: string | null;
  onSelectItem: (id: string) => void;
}

const SelectionTab: React.FC<SelectionTabProps> = ({
  data,
  selectedItem,
  onSelectItem,
}) => {
  const flatListRef = useRef<FlatList | null>(null);

  const scrollToItem = (id: string) => {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({index});
    }
  };

  const renderItem = ({item}: {item: {id: string; title: string}}) => (
    <TouchableOpacity
      style={[
        styles.item,
        item.id === selectedItem ? styles.selectedItem : styles.item,
      ]}
      onPress={() => onSelectItem(item.id)}>
      <AppImages.PropertyData
        style={item.id === selectedItem ? styles.icon : styles.selectedIcon}
      />
      <Text
        style={item.id === selectedItem ? styles.selectedText : styles.title}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      {selectedItem && (
        <TouchableOpacity
          style={styles.scrollButton}
          onPress={() => scrollToItem(selectedItem)}>
          <AppImages.RightArrow />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SelectionTab;
