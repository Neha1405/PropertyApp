import {StyleSheet} from 'react-native';
import {lightTheme} from '../../utils/styles/themes';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    color: lightTheme.colors.aqua,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default styles;
