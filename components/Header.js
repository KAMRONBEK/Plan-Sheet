import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import Touchable from './Touchable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = ({navigation}) => {
    let {navigate}=navigation;
    let {toggleDrawer} = navigation;
    return (
        <View style={styles.container}>
            <Touchable onPress={() => {
                toggleDrawer();
            }}>
                <View>
                    <MaterialIcons name='menu' size={40}
                                   style={{
                                       color: colors.white,
                                   }}/>
                </View>
            </Touchable>
            <SearchBar/>
            <Touchable onPress={()=>navigate('Bonus',{})}>
                <View
                    style={[
                        styles.bonus,
                        {
                            backgroundColor: colors.paleYellow,
                        },
                    ]}>
                    <FontAwesome5 name="coins" size={15} color={colors.yellow}/>
                    <Text style={styles.bonusText}>50</Text>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        paddingHorizontal: 40,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bonus: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    bonusText: {
        color: colors.black,
        paddingLeft: 10,
        fontSize: 16,
    },
});

export default Header;
