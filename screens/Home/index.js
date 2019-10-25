import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

let Home = () => {
  return (
    <React.Fragment>
      <View>
        <Text style={styles.text}>Home</Text>
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

export default Home;
