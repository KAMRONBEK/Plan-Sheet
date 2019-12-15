import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const DateInput = ({title}) => {
    let [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    onTextChange={(enteredText) => setText(enteredText)}
                    value={text}
                    placeholder=''
                    style={styles.input}
                />
                <Text>/</Text>
                <TextInput
                    onTextChange={(text) => setText(text)}
                    value={text}
                    placeholder=''
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    inputWrapper: {
        borderWidth: .5,
        borderRadius: 4,
        borderColor: colors.textGray,
        paddingVertical: 12,
        paddingHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleWrapper: {
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.textGray,
        padding: 0,
    },
});

export default DateInput;
