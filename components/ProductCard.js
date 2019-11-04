import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RoundedButton from './RoundedButton';
import CircleButton from './CircleButton';

const ProductCard = ({item}) => {
    return (
        <View
            style={[
                styles.container,
                {
                    borderColor: colors.borderGray,
                },
            ]}>
            <View style={styles.content}>
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
                            flex: 1,
                            resizeMode: 'cover',
                        }}
                    />
                </View>

                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={[
                        styles.title,
                        {
                            color: colors.darkGray,
                        },
                    ]}>
                    {item.name}
                </Text>
                <Text style={styles.price}>
                    {item.price} {strings.priceUnit}
                </Text>
                <CircleButton/>
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
        borderBottomWidth: 0.6,
        paddingVertical: 10,
        // marginVertical: 10,
        borderRadius: 15,
        flexDirection: 'row',
    },
    image: {
        overflow: 'hidden',
        height: 80,
        width: 80,
        borderWidth: 1,
        borderRadius: 15,
        // marginTop: 15,
        // marginBottom: -15,
        // marginLeft: 15,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        flex:1,
        textAlign:'center'
        // width: 100,
    },
    price:{
        marginRight: 40,
    }
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
