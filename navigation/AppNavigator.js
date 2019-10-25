import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import {createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
