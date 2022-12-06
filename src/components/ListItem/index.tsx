import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from '../Divider';
import {FavButton} from '../FavButton';
import {FavFilledIcon, FavIcon} from '../Icons';
import {listItemStyles} from './styles';

interface IProps {
  joke: string;
  onPress: () => void;
  liked: boolean;
}

export const ListItem = ({joke, onPress, liked}: IProps) => {
  return (
    <>
      <View style={listItemStyles.container}>
        <Text style={listItemStyles.text}>{joke}</Text>
        <FavButton
          icon={
            liked == false ? (
              <FavIcon width={48} height={48} />
            ) : (
              <FavFilledIcon width={48} height={48} />
            )
          }
          onPress={onPress}
        />
      </View>
      <Divider />
    </>
  );
};
