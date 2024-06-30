import {StyleSheet} from 'react-native';
import {lightTheme} from '../../utils/styles/themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
    backgroundColor: '#fff',
  },
  selectedItem: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  selectedText: {
    color: lightTheme.colors.white,
    fontSize: 10,
    fontWeight: '400',
    marginTop: 5,
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: lightTheme.colors.text,
    marginTop: 5,
  },
  scrollButton: {
    // marginLeft: 10,
    // padding: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  scrollButtonText: {
    color: lightTheme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedIcon: {
    color: 'black',
  },
  icon: {
    color: 'white',
  },
});

export default styles;
