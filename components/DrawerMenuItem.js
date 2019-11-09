import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';

const DrawerMenuItem = ({iconName, text}) => {
    // const { navigate } = navigation;
    return (
        <React.Fragment>
            <View style={styles.container}>
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
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 14,
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
