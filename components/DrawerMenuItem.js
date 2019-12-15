import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import Touchable from './Touchable';

const DrawerMenuItem = ({iconName, text, to, navigation}) => {
    // const { navigate } = navigation;
    return (
        <Touchable onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate(to, {});
        }}>
            <View style={styles.container}>
                <MaterialIcons
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
