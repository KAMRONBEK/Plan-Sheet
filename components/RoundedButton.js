import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RoundedButton = ({text, onPress, disabled, checked}) => {
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
                    {text}
                </Text>
                <MaterialIcons
                    name={checked?'check':'local-shipping'}
                    size={30}
                    color={colors.darkGray}
                    style={{
                        marginLeft: 20,
                    }}
                />
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 60,
        minWidth: 200,
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
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

export default RoundedButton;
