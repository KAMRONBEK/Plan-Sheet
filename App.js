/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App: () => React$Node = () => {
  return (
    <React.Fragment>
      <AppNavigator />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
