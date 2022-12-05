import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const appLayoutStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textContainer: {
    marginTop: normalize(108),
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 48,
    marginBottom: normalize(24),
    marginHorizontal: normalize(24),
  },
});
