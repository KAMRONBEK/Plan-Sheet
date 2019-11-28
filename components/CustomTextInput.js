import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import colors from '../constants/colors';
import {useCode} from 'react-native-reanimated';

const CustomTextInput = ({title, numOfInput, constants}) => {
    let [text, setText] = useState('');
    let [count, setCount] = useState(new Array(numOfInput));

    // // let array = new Array(numOfInput);
    // count.map((x, i) => {
    //     console.warn(i);
    // });
    //
    // useEffect(() => {
    //     if (numOfInput) {
    //         setWidth(Math.round(200 / numOfInput));
    //         console.warn(count);
    //     }
    // }, []);
    // let [width, setWidth] = useState(100);


    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.inputWrapper}>
                {/*{count.map((item, index) => {*/}
                {/*    // console.warn(item);*/}
                {/*    return (*/}
                        <TextInput
                            // key={item}
                            onChangeText={text => {
                                setText(text);
                            }}
                            value={text}
                            placeholder=''
                            style={[styles.input, {
                                // width: numOfInput ? width : 200,
                            }]}
                        />
                {/*        );*/}
                {/*})}*/}
                <Text style={{
                    fontSize: 16,
                    color: colors.textGray,
                }}>{constants}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
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
        width: 150,
    },
});

export default CustomTextInput;
