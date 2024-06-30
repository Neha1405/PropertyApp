import React from 'react';
import {View, TextInput, Text, TextInputProps} from 'react-native';
import styles from './styles';

interface TextInputComponentProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  label,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        {...props}
      />
    </View>
  );
};

export default TextInputComponent;
