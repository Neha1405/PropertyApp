import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

interface TextInputComponentProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  placeholder,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default TextInputComponent;
