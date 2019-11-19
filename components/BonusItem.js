import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import colors from '../constants/colors';
import FilledButton from './FilledButton';
import strings from '../localization/strings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BonusItem = ({navigation, item}) => {
    const currentBonus = 50;
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={{
                        height: 250,
                        minWidth: (Dimensions.get('window').width - 100) / 3,
                        resizeMode: 'cover',
                    }}
                />
            </View>
            <View style={styles.nameWrapper}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.bottomWrapper}>
                <View style={styles.bonus}>
                    <FontAwesome5 name="coins" size={15} color={colors.transparentGreen}/>
                    <Text style={[styles.bonusText, {
                        color: (item.cost > currentBonus) ? colors.red : colors.black,
                    }]}>{item.cost}</Text>
                </View>
                <FilledButton  text={strings.exchange}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        //custom width
        maxWidth: (Dimensions.get('window').width - 60) / 3,
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        borderColor: colors.white,
        elevation: 2,
    },
    nameWrapper: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: '100',
        color: colors.black,
    },
    bottomWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    bonus: {
        flexDirection: 'row',
        paddingVertical: 3,
        // paddingHorizontal: 10,
        // borderRadius: 15,
        // borderBottomLeftRadius: 1,
        alignItems: 'center',
        // borderWidth: 0.4,
        borderColor: colors.borderGray,
    },
    bonusText: {
        color: colors.black,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '100',
    },
});

export default BonusItem;
