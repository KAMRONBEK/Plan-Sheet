import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import colors from '../constants/colors';

interface FollowInputProps {
    pattern: string;
}

const FollowInput = ({pattern = '+998|(# #) # # #  # #'}: FollowInputProps) => {
    //TODO:  write down escape characters
    const [index, setIndex] = useState(0);
    const [value, setvalue] = useState('');
    let inputsCount = 0;
    let refs = [];
    let generateContent = () => {
        let content = [];
        let parts = pattern.split('');
        let temp = '';
        for (let part of parts) {
            if (part === '#') {
                content.push({type: 'text', content: temp});
                content.push({type: 'input'});
                temp = '';
                continue;
            }
            temp += part;
        }
        return content;
    };
    let content = generateContent();
    console.warn(content);
    return (
        <View style={styles.container}>
            {content.map(({type, content}, i) => {
                switch (type) {
                    case 'text':
                        return <Text style={styles.text}>{content}</Text>;
                    case 'input':
                        inputsCount++;
                        return (
                            <TextInput

                                keyboardType="numeric"
                                placeholder={'_'}
                                style={styles.input}
                                placeholderTextColor={colors.black}
                                onFocus={() => {
                                    setIndex(i);
                                }}
                                returnKeyType={'next'}
                                blurOnSubmit={false}
                                value={value[inputsCount - 1] && value[inputsCount - 1][0]}
                                onChangeText={character => {
                                    console.warn(character);
                                    if (character === '') {
                                        if (refs[index - 1]) {
                                            refs[index - 1].ref.focus();
                                            setIndex(index - 1);
                                        }
                                        setvalue(value.substr(0, value.length - 1));
                                        return;
                                    }
                                    if (refs[index + 1]) {
                                        refs[index + 1].ref.focus();
                                        setIndex(index + 1);
                                    } else {
                                        return;
                                    }
                                    setvalue(value + character);
                                }}
                                ref={ref => refs.push({ref})}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        // borderColor: colors.borderGray,
        // borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors.textGray,
        fontSize: 18,
    },
    input: {
        fontSize: 18,
        color: colors.textGray,
    },
});

export default FollowInput;
