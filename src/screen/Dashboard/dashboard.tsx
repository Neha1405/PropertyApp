import * as React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {FC} from 'react';
import listdata from './data.json';
import {AppImages} from '../../assets';
import {StackActions, useNavigation} from '@react-navigation/native';
import {routes} from '../../utils/constants';

const Dashboard: FC = () => {
  const nav = useNavigation();
  const gridData = listdata.data;

  const numColumns = 2;

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };

  const renderItem = ({item}) => {
    if (item.empty === true) {
      return <View style={[styles.card, styles.invisible]} />;
    }
    return (
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: item.bgColor,
          },
        ]}
        onPress={() => {
          nav.dispatch(StackActions.push(routes.propertyInfoScreen));
        }}>
        <AppImages.PropertyData style={styles.iconColor} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={formatData(gridData, numColumns)}
        // data={gridData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
};

export default Dashboard;
