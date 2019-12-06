import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator, createTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../localization/strings';
import colors from '../constants/colors';
import {connect} from 'react-redux';

import Login from '../screens/Login';
import Main from '../screens/Main';
import Category from '../screens/Category';
import History from '../screens/History';
import ActiveOrders from '../screens/ActiveOrders';
import Wallet from '../screens/Wallet';
import Bonus from '../screens/Bonus';

import NavBar from '../components/NavBar';
import DrawerMenuItem from '../components/DrawerContent';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerContent from '../components/DrawerContent';
import Product from '../screens/Product';
import Header from '../components/Header';
import Shelf from '../screens/Shelf';

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
//         Wallet: {
//             screen: Wallet,
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

const MainStack = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {header: null},

    },
    Product: {
        screen: Product,
        navigationOptions: {header: null},
    },
}, {});

const HistoryStack = createMaterialTopTabNavigator({
    History: {
        screen: History,
        navigationOptions: {
            header: null,
        },
    },
    ActiveOrders: {
        screen: ActiveOrders,
        navigationOptions: {
            header: null,
        },
    },
}, {
    tabBarOptions: {
        style: {
            backgroundColor: colors.white,
        },
        labelStyle: {
            color: colors.black,
        },
    },
});

const topTabNavigator = createMaterialTopTabNavigator(
    {
        Main: {
            screen: MainStack,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="home" size={17}/>;
                },
                tabBarLabel: strings.main,
            },
        },
        Shelf:{
            screen:Shelf,
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
            screen: HistoryStack,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="history" size={17}/>;
                },
                tabBarLabel: strings.history,
            },
        },
        Wallet: {
            screen: Wallet,
            navigationOptions: {
                tabBarIcon: () => {
                    return <MaterialIcons name="wallet" size={17}/>;
                },
                tabBarLabel: strings.wallet,
            },
        },
        Bonus: {
            screen: Bonus,
        },
    },
    {
        tabBarComponent: props => <Header {...props} />,
        // initialRouteName: 'History',
        swipeEnabled: false,
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

const DrawerNavigator = createDrawerNavigator(
    {
        all: createStackNavigator(
            {
                topTabNavigator,
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

const AppNavigator = createSwitchNavigator({

    // Example: Example,
    Login: {
        screen: Login,
    },
    DrawerNavigator: {
        screen: DrawerNavigator,
    },

});

const AppContainer = ({isAuthorized, ...rest}) => {
    let Navigator = createAppContainer(AppNavigator);
    if (isAuthorized) {
        Navigator = createAppContainer(DrawerNavigator);
    }
    return <Navigator {...rest}/>;
};

let mapStateToProps = ({user}) => ({isAuthorized: user && !!user.token});

export default connect(mapStateToProps)(AppContainer);
