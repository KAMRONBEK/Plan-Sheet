/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, StatusBar, ActivityIndicator} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {ApolloProvider} from '@apollo/react-hooks';
import strings from './localization/strings';
import {AsyncStorage} from 'react-native';
import {Provider, connect} from 'react-redux';
import store from './store/configureStore';

import Header from './components/Header';
import {userLoaded} from './actions/userActions';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import ApolloClient from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';


const App: () => React$Node = () => {

    let [loading, setLoading] = useState(true);
    let [client, setClient] = useState(new ApolloClient({
            uri: 'https://yuz1.herokuapp.com/graphql',
        }),
    );

    let init = async () => {
        let token = await AsyncStorage.getItem('token');
        if (!!token) {
            store.dispatch(userLoaded(token));
            console.warn(store);
            setClient(new ApolloClient({
                // uri: 'https://39990dea.ngrok.io/graphql',
                uri: 'https://yuz1.herokuapp.com/graphql',
                request: (operation) => {
                    operation.setContext({
                        headers: {
                            authorization: token ? token : '',
                        },
                    });
                },
            }));
            console.log(token);
        }
        setLoading(false);
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
