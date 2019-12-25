/**
 * @format
 * @flow
 */

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, AsyncStorage, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {userLoaded} from './actions/userActions';
import strings from './localization/strings';
import AppNavigator from './navigation/AppNavigator';
import store from './store/configureStore';
import typeDefs from './graphql/typeDefs';

const App: () => React$Node = () => {
    let [loading, setLoading] = useState(true);
    let [client, setClient] = useState(
        new ApolloClient({
            uri: 'https://yuz1.herokuapp.com/graphql',
        }),
    );

    let init = async () => {
        let token = await AsyncStorage.getItem('token');
        if (token) {
            store.dispatch(userLoaded(token));
            console.warn(store);
            setClient(
                new ApolloClient({
                    // uri: 'https://39990dea.ngrok.io/graphql',
                    uri: 'https://yuz1.herokuapp.com/graphql',
                    request: operation => {
                        operation.setContext({
                            headers: {
                                authorization: token ? token : '',
                            },
                        });
                    },
                    typeDefs,
                }),
            );

            // let init = async () => {
            //     let token = await AsyncStorage.getItem('token');
            //     if (!!token) {
            //         store.dispatch(userLoaded(token));
            //         console.warn(store);
            //         setClient(new ApolloClient({
            //             // uri: 'https://39990dea.ngrok.io/graphql',
            //             uri: 'https://yuz1.herokuapp.com/graphql',
            //             request: (operation) => {
            //                 operation.setContext({
            //                     headers: {
            //                         authorization: token ? token : '',
            //                     },
            //                 });
            //             },
            //         }));
            //         console.log(token);
            //     }
            setLoading(false);
        }
        useEffect(init, []);

        // strings.setLanguage('eng');

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
        setLoading(false);
    };
    useEffect(init, []);

    strings.setContent('uz');
    if (loading) {
        // return <View style={{flex: 1, backgroundColor: 'red'}}/>;
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#00ff00"/>
            </View>
        );
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
