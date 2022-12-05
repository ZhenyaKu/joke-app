import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from '../Divider';
import {FavButton} from '../FavButton';
import {listItemStyles} from './styles';

interface IProps {
  joke: string;
  onPress: () => void;
  icon: React.ReactNode;
}

export const ListItem = ({joke, onPress, icon}: IProps) => {
  return (
    <>
      <View style={listItemStyles.container}>
        <Text style={listItemStyles.text}>{joke}</Text>
        <FavButton icon={icon} onPress={onPress} />
      </View>
      <Divider />
    </>
  );
};
