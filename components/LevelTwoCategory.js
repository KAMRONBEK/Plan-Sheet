import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

const LevelTwoCategory = ({item, visibility}) => {
    return (
        <Touchable onPress={() => {
            visibility(true);
        }}>
            <View style={styles.container}>
                <Text>{item.title}</Text>
            </View>
        </Touchable>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.categoryTwoColor,
        borderBottomWidth: 2,
        flexDirection: 'column',
        borderColor: colors.white,
        paddingLeft: 30,
        paddingVertical: 30,
    },
});

export default LevelTwoCategory;
