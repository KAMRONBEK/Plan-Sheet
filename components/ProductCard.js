import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RoundedButton from './RoundedButton';
import CircleButton from './CircleButton';
import FilledButton from './FilledButton';

const ProductCard = ({item}) => {
    return (
        <View
            style={styles.container}>
            <View style={styles.content}>
                <View
                    style={styles.image}>
                    <Image
                        source={{
                            uri: item.image,
                        }}
                        style={{
                            flex: 1,
                            resizeMode: 'cover',
                        }}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode='tail'
                        style={styles.title}>
                        {item.name}
                    </Text>
                    <Text style={styles.price}>
                        {item.minimumOrder} {strings.piece}
                    </Text>
                    <Text style={styles.price}>
                        {item.price} {strings.priceUnit}
                    </Text>
                    {/*<CircleButton/>*/}
                    <FilledButton text={strings.ordering}/>
                </View>

            </View>
            {/*<View style={styles.middle}>*/}
            {/*    <View style={styles.doubleText}>*/}
            {/*        <Text>{strings.inStock}</Text>*/}
            {/*        <Text*/}
            {/*            style={{*/}
            {/*                color: colors.green,*/}
            {/*                paddingLeft: 20,*/}
            {/*            }}>*/}
            {/*            {item.remaining} {strings.piece}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <View style={styles.doubleText}>*/}
            {/*        <Text>{strings.minimumOrder} </Text>*/}
            {/*        <Text*/}
            {/*            style={{*/}
            {/*                color: colors.green,*/}
            {/*                paddingLeft: 20,*/}
            {/*            }}>*/}
            {/*            {item.minimumOrder} {strings.piece}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <View style={styles.doubleText}>*/}
            {/*        <Text>{strings.manufacturer}</Text>*/}
            {/*        <Text*/}
            {/*            style={{*/}
            {/*                color: colors.green,*/}
            {/*                paddingLeft: 20,*/}
            {/*            }}>*/}
            {/*            {item.manufacturer}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*</View>*/}
            {/*<View style={styles.last}>*/}
            {/*    <View style={styles.favorite}>*/}
            {/*        <MaterialIcons name="favorite-border" size={25}/>*/}
            {/*    </View>*/}
            {/*    <View style={styles.price}>*/}
            {/*        <Text style={styles.price}>*/}
            {/*            {item.price} {strings.priceUnit}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <View style={styles.button}>*/}
            {/*        /!*<RoundedButton text={strings.ordering}/>*!/*/}
            {/*        <CircleButton disabled/>*/}
            {/*    </View>*/}
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        paddingVertical: 10,
        // marginVertical: 10,
        borderRadius: 15,
        flexDirection: 'row',
    },
    image: {
        overflow: 'hidden',
        height: 85,
        width: 85,
        borderWidth: 0.5,
        // borderRadius: 15,
        borderColor: colors.borderGray,
        // marginTop: 15,
        // marginBottom: -15,
        // marginLeft: 15,
    },
    textWrap: {
        borderBottomWidth: 0.6,
        borderColor: colors.borderGray,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        // paddingBottom:,
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 82,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        // marginHorizontal:15,
        color: colors.darkGray,
        // width: 100,
    },
    price: {
        marginRight: 20,
    },
    // description: {
    //     width: 170,
    //     height: 80,
    //     overflow: 'hidden',
    // },
    // middle: {
    //     justifyContent: 'center',
    // },
    // doubleText: {
    //     paddingVertical: 10,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // last: {
    //     justifyContent: 'center',
    //     padding: 15,
    // },
    // favorite: {
    //     alignItems: 'flex-end',
    // },
    // price: {
    //     paddingLeft: 10,
    //     fontSize: 17,
    // },
    // button: {
    //     marginTop: -60,
    // },
});

export default ProductCard;
