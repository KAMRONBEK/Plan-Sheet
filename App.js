/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar, ActivityIndicator} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {client} from './graphql/init';
import {ApolloProvider} from '@apollo/react-hooks';
import strings from './localization/strings';
import {AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/configureStore';

import Header from './components/Header';
import {userLoaded} from './actions/itemActions';


const App: () => React$Node = () => {
    let [loading, setLoading] = useState(true);

    let init = async () => {
        let token = await AsyncStorage.getItem('token');
        if (!!token) {
            store.dispatch(userLoaded(token));
        }
        setLoading(false);
        console.warn(token);
    };
    useEffect(init, []);


    strings.setContent('uz');
    if (loading) {
        // return <View style={{flex: 1, backgroundColor: 'red'}}/>;
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <ActivityIndicator size="large" color="#00ff00"/>
        </View>;
    }

    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        </ApolloProvider>
    );
};

const styles = StyleSheet.create({});

export default App;
