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

import NavBar from '../components/NavBar';
import DrawerMenuItem from '../components/DrawerContent';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerContent from '../components/DrawerContent';

// const navigatorStack = createStackNavigator(
//     {
//         Main: {
//             screen: Main,
//             navigationOptions: {
//                 tabBarIcon: () => {
//                     return <MaterialIcons name="home" size={17}/>;
//                 },
//                 tabBarLabel: strings.main,
//             },
//         },
//         Category: {
//             screen: Category,
//             navigationOptions: {
//                 tabBarIcon: () => {
//                     return <MaterialIcons name="format-list-bulleted" size={17}/>;
//                 },
//                 tabBarLabel: strings.category,
//             },
//         },
//         History: {
//             screen: History,
//             navigationOptions: {
//                 tabBarIcon: () => {
//                     return <MaterialIcons name="history" size={17}/>;
//                 },
//                 tabBarLabel: strings.history,
//             },
//         },
//         Favorite: {
//             screen: Favorite,
//             navigationOptions: {
//                 tabBarIcon: () => {
//                     return <MaterialIcons name="favorite" size={17}/>;
//                 },
//                 tabBarLabel: strings.favorite,
//             },
//         },
//     }, {
//         navigationOptions:{
//             header:null
//         }
//     },
// );

const topTabNavigator = createMaterialTopTabNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="home" size={17}/>;
                },
                tabBarLabel: strings.main,
            },
        },
        Category: {
            screen: Category,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="format-list-bulleted" size={17}/>;
                },
                tabBarLabel: strings.category,
            },
        },
        History: {
            screen: History,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="history" size={17}/>;
                },
                tabBarLabel: strings.history,
            },
        },
        Favorite: {
            screen: Favorite,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="favorite" size={17}/>;
                },
                tabBarLabel: strings.favorite,
            },
        },
    },
    {
        // tabBarComponent: props => <NavBar {...props} />,
        // initialRouteName: 'History',
        tabBarOptions:{
            showLabel:false,
            style:{
                display:'none'
            }
        }
    },
);

// example route
const Example = createStackNavigator({
    Example: {
        screen: DrawerMenuItem,
        navigationOptions: {
            header: null,
        },
    },
});

const AppNavigator = createSwitchNavigator({

    // Example: Example,
    Tabs: {
        screen: topTabNavigator,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: Login,
    },
});

const DrawerNavigator = createDrawerNavigator(
    {
        all: createStackNavigator(
            {
                AppNavigator,
            },
            {
                headerMode: 'none',
                mode: 'modal',
                transparentCard: true,
                cardStyle: {
                    backgroundColor: 'transparent',
                    opacity: 1,
                },
            },
        ),
    },
    {
        drawerWidth: 350,
        contentComponent: DrawerContent,
    },
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
