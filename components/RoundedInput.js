import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import colors from '../constants/colors';

let RoundedInput = ({title, isPassword, getInput}) => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text
                    style={[
                        styles.title,
                        {
                            color: colors.green,
                        },
                    ]}>
                    {title}
                </Text>
                <View
                    style={[
                        styles.inputWrapper,
                        {
                            borderColor: colors.paleGray,
                        },
                    ]}>
                    <TextInput
                        secureTextEntry={isPassword}
                        style={styles.input}
                        onChangeText={(text) => {
                            getInput(text);
                        }}/>
                </View>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 100,
    },
    title: {
        fontSize: 25,
        paddingVertical: 15,
    },

    inputWrapper: {
        height: 70,
        borderWidth: 0.8,
        borderRadius: 15,
        marginBottom: 10,
    },
    input: {
        height: 70,
        fontSize: 25,
    },
});

export default RoundedInput;
