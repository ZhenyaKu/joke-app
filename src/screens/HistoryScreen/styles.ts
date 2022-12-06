import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const historyScreenStyles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 38,
    margin: 16,
    alignSelf: 'center',
  },
  divider: {
    position: 'absolute',
    bottom: normalize(5),
  },
});
