import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';

interface IProps extends TouchableOpacityProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export const FavButton = ({
  onPress,
  icon,
  ...props
}: PropsWithChildren<IProps>) => {
  return (
    <View style={props.style}>
      <TouchableOpacity {...props} onPress={onPress}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};
