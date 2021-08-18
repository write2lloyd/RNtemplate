import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import styles from '../themes/AppStyles';

const RootNavigator = () => {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <StatusBar
          backgroundColor={colors.background}
          barStyle="dark-content"
        />
        <AppStackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
