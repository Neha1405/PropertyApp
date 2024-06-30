import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {AppImages} from '../../assets';

const ExpandCollapseComponent = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const height = Dimensions.get('window').height;
  const toggleExpandCollapse = () => {
    const initialValue = expanded ? 1 : 0;
    const finalValue = expanded ? 0 : 1;

    setExpanded(!expanded);

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height], // Adjust this value based on the expected height of the expanded content
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpandCollapse}>
        <View style={styles.header}>
          <AppImages.ArrowUp />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{height: expanded ? animatedHeight : 0, overflow: 'hidden'}}>
        <View style={styles.content}>{children}</View>
      </Animated.View>
    </View>
  );
};

export default ExpandCollapseComponent;
