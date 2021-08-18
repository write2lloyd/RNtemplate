import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctIcons from 'react-native-vector-icons/Octicons';

import Announcements from '../screens/Announcements';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import More from '../screens/More';

const Tab = createBottomTabNavigator();

const bottomTabStyles = {
  tabItemsStyle: { flex: 1, padding: 5, width: '100%' },
  labelStyle: {
    fontSize: 10,
    fontWeight: '600',
    width: '100%',
  },
  tabBarStyle: {
    height: 60,
    paddingHorizontal: 5,
  },
};

const AppTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.accent,
        inactiveTintColor: colors.dark,
        tabStyle: bottomTabStyles.tabItemsStyle,
        labelStyle: bottomTabStyles.labelStyle,
        style: bottomTabStyles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Announcements"
        component={Announcements}
        options={{
          tabBarLabel: 'Announcements',
          tabBarIcon: ({ color, size }) => (
            <OctIcons name="megaphone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="more-horiz" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
