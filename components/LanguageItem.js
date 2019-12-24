import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../constants/colors';
import Touchable from './Touchable';


let LanguageItem = ({text, isActive, onPress}) => {
    return (
        <React.Fragment>
            <Touchable onPress={onPress}>
                <View style={[styles.lanElement, isActive ? {
                    borderWidth: 1,
                    borderColor: colors.white,
                    backgroundColor: colors.green,
                } : {}]}>
                    <Text style={[styles.lanText, isActive ? {
                        color: colors.white,
                    } : {}]}>{text}</Text>
                </View>
            </Touchable>
        </React.Fragment>
    );
};


const styles = StyleSheet.create({
    lanElement: {
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        borderRadius: 30,
        marginHorizontal: -40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lanText: {
        fontSize: 15,
        color: colors.green,
    },
});

export default LanguageItem;
