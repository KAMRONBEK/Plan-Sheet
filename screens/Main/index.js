import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

let Main = () => {
  return (
    <React.Fragment>
      <View>
        <Text style={styles.text}>Main</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 60,
  },
});

export default Main;
