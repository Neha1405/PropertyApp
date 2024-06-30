import {StyleSheet} from 'react-native';
import {lightTheme} from '../../utils/styles/themes';

const styles = StyleSheet.create({
  container: {
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: '#ddd',
    // borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 10,
    height: '100%',
  },
  header: {
    backgroundColor: lightTheme.colors.header,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: lightTheme.colors.white,
  },
  content: {
    padding: 15,
    flex: 1,
  },
});

export default styles;
