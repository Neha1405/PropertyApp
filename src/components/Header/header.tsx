import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {AppImages} from '../../assets';

interface headerProps {
  title: string;
  goBack: () => void;
}

const Header: FC<headerProps> = ({title, goBack}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={goBack} style={styles.button}>
        <AppImages.LeftArrow />
      </TouchableOpacity>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export default Header;
