import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import colors from '../constants/colors';

const LevelThreeCategory = ({item, onPress}) => {
    return (
        <Touchable onPress={onPress}>
            <View style={styles.container}>
                <Text>{item.name}</Text>
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
        paddingVertical: 23,
    },
});

export default LevelThreeCategory;
