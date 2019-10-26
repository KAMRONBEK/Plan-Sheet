import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../localization/strings';

import Login from '../screens/Login';
import Main from '../screens/Main';
import Category from '../screens/Category';
import History from '../screens/History';
import Favorite from '../screens/Favorite';
import Header from '../components/Header';

const topTabNavigator = createMaterialTopTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => {
          return <MaterialIcons name="home" size={17} />;
        },
        tabBarLabel: strings.main,
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        tabBarIcon: () => {
          return <MaterialIcons name="format-list-bulleted" size={17} />;
        },
        tabBarLabel: strings.category,
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: () => {
          return <MaterialIcons name="history" size={17} />;
        },
        tabBarLabel: strings.history,
      },
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: () => {
          return <MaterialIcons name="favorite" size={17} />;
        },
        tabBarLabel: strings.favorite,
      },
    },
  },
  {
    tabBarComponent: props => <Header {...props} />,
  },
);

const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  Tabs: {
    screen: topTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
