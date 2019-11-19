import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RoundedButton from './RoundedButton';
import CircleButton from './CircleButton';
import FilledButton from './FilledButton';
import Touchable from './Touchable';

const ProductCardHistory = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={{
                    height: 85,
                    width: 85,
                    resizeMode: 'cover',
                }}
                       source={{
                           uri: item.image,
                       }}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.nameWrapper}>
                    <Text>{item.name}</Text>
                </View>
                <Text>{item.orderAmount} x {item.oldPrice} {item.priceUnit}</Text>
                <View style={styles.priceWrapper}>
                    <MaterialIcons
                        name={(item.price > item.oldPrice) ? 'arrow-drop-up' : 'arrow-drop-down'}
                        size={35}
                        color={(item.price > item.oldPrice) ? colors.green : colors.red}
                    />
                    <Text style={styles.price}>{item.price} {item.priceUnit}</Text>
                </View>
                <Touchable onPress={() => {

                }}>
                    <View>
                        <FilledButton text={strings.ordering}/>
                    </View>
                </Touchable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    imageWrapper: {
        borderWidth: 1,
        borderColor: colors.borderGray,
    },
    content: {
        flex: 1,
        borderBottomWidth: 1,
        marginLeft: 5,
        paddingVertical: 25,
        borderColor: colors.borderGray,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nameWrapper: {
        flexBasis: 200,
        alignItems: 'center',
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        marginLeft: -5,
    },
});

export default ProductCardHistory;
