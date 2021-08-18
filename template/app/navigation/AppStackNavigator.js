import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppTabNavigator from './AppTabNavigator';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AppTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
