import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RoundedButton from './RoundedButton';
import CircleButton from './CircleButton';

const ProductCardHistory = ({item}) => {
    return (
        <View
            style={[
                styles.container,
                {

                    borderColor: colors.borderGray,
                },
            ]}>
            <View
                style={[
                    styles.image,
                    {
                        borderColor: colors.borderGray,
                    },
                ]}>
                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        resizeMode: 'cover',
                    }}
                />
            </View>

            <View style={[styles.content, {
                borderColor: colors.borderGray,
                // backgroundColor:colors.superPaleGray,
                marginLeft: 10,
            }]}>
                <View style={styles.first}>
                    <Text style={[styles.title, {
                        color: colors.green,
                    }]}>{item.name}</Text>
                    <View style={styles.textWrap}>
                        <Text>{strings.inStock}</Text>
                        <Text>
                            {item.remaining} {strings.piece}
                        </Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.minimumOrder}</Text>
                        <Text>
                            {item.minimumOrder} {strings.piece}
                        </Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.manufacturer}</Text>
                        <Text>{item.manufacturer}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.price}</Text>
                        <Text>
                            {item.price} {strings.priceUnit}
                        </Text>
                    </View>
                    <View style={
                        styles.acceptWrapper
                    }>
                        {/*<RoundedButton text={strings.accept} disabled checked/>*/}
                        <CircleButton/>
                    </View>
                </View>
                <View style={styles.middle}>
                    <View style={styles.top}>
                        <View style={styles.textWrap}>
                            <Text style={styles.title}>{strings.orderStatus}</Text>
                            <Text style={[styles.title, {
                                color: colors.green,
                            }]}>{item.status}</Text>
                        </View>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.orderAmount}</Text>
                        <Text>{item.orderAmount} {strings.piece}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.orderPrice}</Text>
                        <Text>{item.orderPrice}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.orderDate}</Text>
                        <Text>{item.orderDate}</Text>
                    </View>
                    <View style={styles.textWrap}>
                        <Text>{strings.deliveryDate}</Text>
                        <Text>{item.deliveryDate}</Text>
                    </View>
                    <View style={
                        styles.orderWrapper}>
                        {/*<RoundedButton text={strings.ordering}/>*/}
                    </View>
                </View>
            </View>
            <View style={styles.last}>

                {/*<View style={*/}
                {/*    styles.acceptWrapper*/}
                {/*}>*/}
                {/*    <RoundedButton text={strings.accept} disabled checked/>*/}
                {/*</View>*/}
                {/*<View style={*/}
                {/*    styles.orderWrapper}>*/}
                {/*    <RoundedButton text={strings.ordering}/>*/}
                {/*</View>*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems:'center',
        // justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    first: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    textWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    middle: {
        flex: 1,
        padding: 10,
    },
    last: {},
    image: {
        zIndex:100,
        overflow: 'hidden',
        height: 150,
        width: 150,
        // marginTop: -10,
        // marginRight: -25,
        borderWidth: 1,
        borderRadius: 20,
    },
    favorite: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    acceptWrapper: {
        // marginTop: -45,
    },
    orderWrapper: {
        // marginTop: -45,
    },
});

export default ProductCardHistory;
