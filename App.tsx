import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TodayScreen} from './src/screens/TodayScreen';
import {AppRouteNames} from './src/navigation/types';
import {HistoryScreen} from './src/screens/HistoryScreen';
import {HistoryIcon, TodayIcon} from './src/components/Icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={AppRouteNames.TodayScreen}
        screenOptions={{
          tabBarActiveTintColor: '#9763FF',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            marginBottom: 28,
            borderTopWidth: 0,
            marginHorizontal: 100,
          },
        }}>
        <Tab.Screen
          name={AppRouteNames.TodayScreen}
          component={TodayScreen}
          options={{
            tabBarLabel: 'Today',
            tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
            tabBarIcon: ({color}) => <TodayIcon color={color} />,
          }}
        />
        <Tab.Screen
          name={AppRouteNames.HistoryScreen}
          component={HistoryScreen}
          options={{
            tabBarLabel: 'History',
            tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
            tabBarIcon: ({color}) => <HistoryIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
