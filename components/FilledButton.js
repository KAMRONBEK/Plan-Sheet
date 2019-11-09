import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../constants/colors';
const FilledButton = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.green,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
    },
    buttonText: {
        fontSize:17,
        color:colors.white,
        fontWeight:"bold"
    }
});

export default FilledButton;
