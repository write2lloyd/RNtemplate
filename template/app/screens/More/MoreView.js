import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MoreView = props => {
  return (
    <View style={styles.container}>
      <Text>This is the {props.title}</Text>
    </View>
  );
};

export default MoreView;
