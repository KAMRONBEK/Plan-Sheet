import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import Touchable from './Touchable';

const DrawerMenuItem = ({iconName, text,onPress}) => {
    // const { navigate } = navigation;
    return (
        <Touchable onPress={onPress}>
            <View style={styles.container} >
                <Feather
                    name={iconName}
                    size={30}
                    color={colors.white}
                    style={{
                        paddingHorizontal: 40,
                    }}/>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        {text}
                    </Text>
                </View>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleWrapper: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    title: {
        color: colors.white,
    },
});

export default DrawerMenuItem;