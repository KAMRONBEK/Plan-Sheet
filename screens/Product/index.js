import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import strings from '../../localization/strings';
import Touchable from '../../components/Touchable';
import RoundedButton from '../../components/RoundedButton';
import {useLazyQuery, useQuery} from '@apollo/react-hooks';
import {GET_PRODUCT_DATA} from '../../graphql/requests';

const Product = ({navigation}) => {
    const productId = navigation.getParam('product_id');
    let {loading, data, error} = useQuery(GET_PRODUCT_DATA, {
        variables: {
            product_id: productId,
        },
    });

    let [productData, setProductData] = useState({});
    let [images, setImages] = useState([]);
    let [stocks, setStocks] = useState([]);
    let [manufacturerData, setManufacturerData] = useState({});

    useEffect(() => {
        if (data) {
            console.warn(data);
            setProductData(data.getProductById);
            setImages(data.getProductById.images);
            setStocks(data.getProductById.stock);
            setManufacturerData(data.getProductById.manufacturer_id);
        }
    }, [data]);



    const {navigate} = navigation;

    return (
        <React.Fragment>
            {loading ? (<View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large" color="#00ff00"/>
            </View>) : (<View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.imageWrapper}>
                            {images && images.length > 0 ? (<Image style={{
                                borderRadius: 0,
                                width: 260,
                                height: 270,
                                resizeMode: 'cover',
                            }}
                                                                   source={{
                                                                       uri: images && images[0],
                                                                   }}/>) : (
                                <View style={{
                                    borderRadius: 0,
                                    width: 260,
                                    height: 270,
                                    resizeMode: 'cover',
                                }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <ActivityIndicator size="large" color="#00ff00"/>
                                    </View>
                                </View>
                            )}
                            <View style={styles.imageBunch}>
                                {images && images.length > 0 ? (images.map((image, index) => {
                                    return (
                                        <View
                                            key={index}
                                            style={{
                                                borderWidth: 1,
                                                marginRight: 5,
                                                borderColor: colors.borderGray,
                                            }}>
                                            <Image
                                                key={index}
                                                source={{
                                                    uri: image,
                                                }}
                                                style={{
                                                    height: 55,
                                                    width: 55,
                                                    resizeMode: 'cover',
                                                }}/>
                                        </View>
                                    );
                                })) : (
                                    <Image/>
                                )}
                            </View>
                        </View>
                        <View style={styles.textContent}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>
                                    {productData.name}
                                </Text>
                            </View>
                            <View style={styles.priceWrapper}>
                                <Text style={styles.priceText}>{strings.price}</Text>
                                <Text style={styles.price}>{productData.price} {strings.priceUnit}</Text>
                            </View>
                            <View style={styles.deliveryWrapper}>
                                <Text style={styles.deliveryText}>{strings.delivery}</Text>
                                <Text style={styles.delivery}>24-48 {strings.hours}</Text>
                            </View>
                            <View style={styles.paymentWrapper}>
                                <Text style={styles.paymentText}>{strings.payment}</Text>
                                <Text style={styles.payment}>{strings.cash} / {strings.credit}</Text>
                            </View>
                            <View style={styles.manufacturerWrapper}>
                                <Text style={styles.manufacturerText}>{strings.manufacturerName}</Text>
                                <Text
                                    style={styles.manufacturer}>{!!manufacturerData && manufacturerData.legal_name}
                                </Text>
                            </View>
                            <View style={styles.textArea}>
                                <Text style={styles.description}>
                                    {productData.short_desc}
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
            )}
        </React.Fragment>
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
        justifyContent: 'flex-start',
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
