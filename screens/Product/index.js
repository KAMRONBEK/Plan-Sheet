import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import strings from '../../localization/strings';
import Touchable from '../../components/Touchable';
import RoundedButton from '../../components/RoundedButton';

const Product = ({navigation}) => {
    let [item, setItem] = useState({});
    console.warn(item);
    useEffect(() => {
        setItem(navigation.getParam('item'));
    }, []);
    const {navigate} = navigation;
    // let [item, setItem] = useState(navigation.getParam(item));
    return (
        <View style={styles.container}>
            {/*<View style={{*/}
            {/*    flexDirection: 'row',*/}
            {/*    justifyContent: 'space-between',*/}
            {/*}}>*/}
            {/*    <Touchable onPress={() => navigation.goBack()}>*/}
            {/*        <View style={{*/}
            {/*            padding: 10,*/}
            {/*            borderRadius: 10,*/}
            {/*        }}>*/}
            {/*            <MaterialIcons name='arrow-back' size={30} style={{color: colors.textGray}}/>*/}
            {/*        </View>*/}
            {/*    </Touchable>*/}
            {/*    <MaterialIcons name='favorite-border' size={30} style={{color: colors.green}}/>*/}
            {/*</View>*/}
            <View style={styles.content}>
                <View style={styles.imageWrapper}>
                    <Image style={{
                        borderRadius: 0,
                        width: 260,
                        height: 270,
                        resizeMode: 'cover',
                    }}
                           source={{
                               uri: item.image,
                           }}/>
                    <View style={styles.imageBunch}>
                        <View style={{
                            borderWidth: 1,
                            borderColor:colors.borderGray
                        }}>
                            <Image
                                source={{
                                    uri: 'https://adnstudio.com/wp-content/uploads/2014/03/como-vender-un-producto-de-forma-efectiva-con-tecnicas-de-branding-branding-adnstudio.jpg',
                                }}
                                style={{
                                    height: 55,
                                    width: 55,
                                    resizeMode: 'cover',
                                }}/>
                        </View>

                        <View style={{
                            borderWidth: 1,
                            borderColor:colors.borderGray
                        }}>

                            <Image
                                source={{
                                    uri: 'https://adnstudio.com/wp-content/uploads/2014/03/como-vender-un-producto-de-forma-efectiva-con-tecnicas-de-branding-branding-adnstudio.jpg',
                                }}
                                style={{
                                    height: 55,
                                    width: 55,
                                    resizeMode: 'cover',
                                }}/>
                        </View>

                        <View style={{
                            borderWidth: 1,
                            borderColor:colors.borderGray
                        }}>

                            <Image
                                source={{
                                    uri: 'https://adnstudio.com/wp-content/uploads/2014/03/como-vender-un-producto-de-forma-efectiva-con-tecnicas-de-branding-branding-adnstudio.jpg',
                                }}
                                style={{
                                    height: 55,
                                    width: 55,
                                    resizeMode: 'cover',
                                }}/>
                        </View>

                        <View style={{
                            borderWidth: 1,
                            borderColor:colors.borderGray
                        }}>

                            <Image
                                source={{
                                    uri: 'https://adnstudio.com/wp-content/uploads/2014/03/como-vender-un-producto-de-forma-efectiva-con-tecnicas-de-branding-branding-adnstudio.jpg',
                                }}
                                style={{
                                    height: 55,
                                    width: 55,
                                    resizeMode: 'cover',
                                }}/>
                        </View>

                    </View>
                </View>
                <View style={styles.textContent}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.priceText}>{strings.price}</Text>
                        <Text style={styles.price}>{item.price} {strings.priceUnit}</Text>
                    </View>
                    <View style={styles.deliveryWrapper}>
                        <Text style={styles.deliveryText}>{strings.delivery}</Text>
                        <Text style={styles.delivery}>24-48 {strings.hours}</Text>
                    </View>
                    <View style={styles.paymentWrapper}>
                        <Text style={styles.paymentText}>{strings.payment}</Text>
                        <Text style={styles.payment}>24-48 {strings.hours}</Text>
                    </View>
                    <View style={styles.manufacturerWrapper}>
                        <Text style={styles.manufacturerText}>{strings.manufacturerName}</Text>
                        <Text style={styles.manufacturer}>{item.manufacturer}</Text>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <Text style={styles.showMore}>
                            {strings.showMore}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 200,
            }}>
                <RoundedButton text={strings.ordering}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 40,
    },
    content: {
        flexDirection: 'row',
    },
    imageWrapper: {
        overflow: 'hidden',
        padding: 10,
        borderRadius: 0,
    },
    imageBunch: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    textContent: {
        flex: 1,
        padding: 10,
    },
    titleWrapper: {
        borderBottomWidth: 0.5,
        borderColor: colors.green,
        paddingBottom: 20,
        // borderBottomColor:
    },
    title: {
        color: colors.green,
        fontSize: 17,
        fontWeight: 'bold',
    },
    priceWrapper: {
        paddingTop: 12,
        borderBottomWidth: 0.5,
        borderColor: colors.green,
        paddingBottom: 12,
    },
    priceText: {
        fontSize: 13,
        fontWeight: '100',
    },
    price: {
        color: colors.green,
        paddingBottom: 5,
        fontSize: 13,
    },
    deliveryWrapper: {
        paddingTop: 12,
        borderBottomWidth: 0.5,
        borderColor: colors.green,
        paddingBottom: 12,
    },
    deliveryText: {
        fontSize: 13,
        fontWeight: '100',
    },
    delivery: {
        color: colors.green,
        paddingBottom: 5,
        fontSize: 17,
    },
    manufacturerWrapper: {
        paddingTop: 12,
        borderBottomWidth: 0.5,
        borderColor: colors.green,
        paddingBottom: 12,
    },
    manufacturerText: {
        fontSize: 13,
        fontWeight: '100',
    },
    manufacturer: {
        color: colors.green,
        paddingBottom: 5,
        fontSize: 13,
    }, paymentWrapper: {
        paddingTop: 12,
        borderBottomWidth: 0.5,
        borderColor: colors.green,
        paddingBottom: 12,
    },
    paymentText: {
        fontSize: 13,
        fontWeight: '100',
    },
    payment: {
        color: colors.green,
        paddingBottom: 5,
        fontSize: 13,
    },
    textArea: {
        borderColor: colors.borderGray,
        borderWidth: 1,
        padding: 20,
    },
    description: {
        color: colors.textGray,
        lineHeight: 20,
    },
    showMore: {
        color: colors.green,
        fontSize: 17,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Product;
