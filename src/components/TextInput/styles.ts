import {StyleSheet} from 'react-native';
import {lightTheme} from '../../utils/styles/themes';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: lightTheme.colors.white,
    fontSize: 14,
  },
});

export default styles;
