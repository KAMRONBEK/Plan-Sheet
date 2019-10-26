import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../../components/Header';

let Main = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Main</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
    fontSize: 60,
  },
});

export default Main;
