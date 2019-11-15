import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';
import Header from './Header';

const FilledButton = ({text, invert}) => {
    return (
        <React.Fragment>
            {invert ? (
                <View style={[styles.container, {
                    backgroundColor:colors.grayish,
                    borderRadius: 20,
                    elevation:1.5
                }]}>
                    <Text style={[styles.buttonText, {
                        color: colors.green,

                    }]}>{text}</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            )}
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 15,
        color: colors.white,
        fontWeight: 'bold',
    },
});

export default FilledButton;
