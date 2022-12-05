import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const listItemStyles = StyleSheet.create({
  container: {
    margin: normalize(24),
    flexDirection: 'row',
    overflow: 'hidden',
  },

  text: {
    marginRight: normalize(20),
    width: '75%',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
  },
});
