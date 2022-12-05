import React, {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import {Divider} from '../Divider';
import {appLayoutStyles} from './styles';

type IProps = {
  title: string;
};

export const AppLayout = ({title, children}: PropsWithChildren<IProps>) => {
  return (
    <View style={appLayoutStyles.container}>
      <View style={appLayoutStyles.textContainer}>
        <Text style={appLayoutStyles.title}>{title}</Text>
        <Divider />
      </View>
      {children}
    </View>
  );
};
