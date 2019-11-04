import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CircleButton = ({onPress, disabled, checked}) => {
    return (
        <Touchable onPress={onPress}>
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: colors.superPaleGray,
                    },
                ]}>
                <Text
                    style={[
                        styles.text,
                        {
                            color: disabled ? colors.textGray : colors.green,
                        },
                    ]}>
                </Text>
                <MaterialIcons
                    name={checked ? 'check' : 'local-shipping'}
                    size={30}
                    color={colors.darkGray}
                />
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        width: 60,
        height:60,
        // marginTop: 60,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    text: {fontSize: 23, fontWeight: '400'},
});

export default CircleButton;
