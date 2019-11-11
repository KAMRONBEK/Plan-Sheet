/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import strings from './localization/strings';
import Header from './components/Header';

const App: () => React$Node = () => {
    strings.setContent('uz');
    return (
        <React.Fragment>
            <AppNavigator/>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({});

export default App;
