import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import Touchable from './Touchable';

const Header = ({navigation}) => {
    let {toggleDrawer} = navigation;
    return (
        <View style={styles.container}>
            <Touchable onPress={() => {
                toggleDrawer();
            }}>
                <View>
                    <MaterialIcons name='menu' size={55}
                                   style={{
                                       color: colors.white,
                                   }}/>
                </View>
            </Touchable>
            <SearchBar/>
            <MaterialIcons
                name="filter-list"
                size={55}
                style={{
                    color: colors.white,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        paddingHorizontal: 40,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Header;
