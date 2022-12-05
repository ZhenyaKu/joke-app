import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const todayScreenStyles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(24),
    marginTop: normalize(130),
  },

  text: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 38,
    marginBottom: normalize(16),
  },
  divider: {
    position: 'absolute',
    bottom: normalize(5),
  },
});
