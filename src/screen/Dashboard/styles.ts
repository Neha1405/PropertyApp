import {Dimensions, StyleSheet} from 'react-native';
import {lightTheme} from '../../utils/styles/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.white,
  },

  flatListContent: {
    paddingHorizontal: 10,
  },
  column: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    maxWidth: Dimensions.get('window').width / 2 - 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: lightTheme.colors.text,
    marginTop: 5,
  },
  iconColor: {
    color: 'black',
  },
  content: {
    fontSize: 12,
    color: lightTheme.colors.text,
  },
  invisible: {
    backgroundColor: 'transparent',
  },
});

export default styles;
