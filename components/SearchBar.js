import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import strings from '../localization/strings';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';

const SearchBar = () => {
    return (
        <View
            style={[
                styles.container,
                {
                    borderColor: colors.green,
                },
            ]}>
            <Feather name="search" size={24} style={{
                fontWeight: '100',
                paddingHorizontal: 20,
                paddingVertical: 5,
                color: colors.green,
            }}/>
            <TextInput placeholder={strings.searchProduct} style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        // paddingHorizontal: 15,
        borderRadius: 7,
        marginHorizontal: 10,
        marginLeft:30
    },
    input: {
        alignContent: 'center',
        height: 30,
        flex: 1,
        padding: 0,
        fontSize: 13,
        fontStyle:'italic',
        fontWeight: '100',
    },
});

export default SearchBar;
