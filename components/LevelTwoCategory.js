import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Touchable from './Touchable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

const LevelTwoCategory = ({item, visibility, setThirdCategory}) => {
    return (
        <Touchable onPress={() => {
            visibility(true);
            setThirdCategory({
                variables: {
                    parentCategoryID: item._id,
                },
            });
        }}>
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
        paddingVertical: 30,
    },
});

export default LevelTwoCategory;
