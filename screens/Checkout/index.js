import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Alert} from 'react-native';
import colors from '../../constants/colors';
import strings from '../../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Touchable from '../../components/Touchable';
import ProductInCheckout from '../../components/ProductInCheckout';
import ProductCard from '../../components/ProductCard';
import RoundedButton from '../../components/RoundedButton';
import FilledButton from '../../components/FilledButton';
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GET_PRODUCT_DATA} from '../../graphql/requests';


const Checkout = ({navigation, item, modalOn}) => {
    let [stockList, setStockList] = useState([]);
    let [selectedType, setSelectedType] = useState(0);
    let [totalCount, setTotalCount] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);
    let [orderList, setOrderList] = useState([]);
    let [getProductData, {loading, data, error}] = useLazyQuery(GET_PRODUCT_DATA);
    useEffect(() => {
        if (!!item) {
            getProductData({
                variables: {
                    product_id: item._id,
                },
            });
        }
        if (data) {
            console.warn('getProductById');
            console.warn(data);
            console.warn(data.getProductById);
            setStockList(data.getProductById.stock);
            setOrderList(data.getProductById.stock);
        }
    }, [data]);

    const alerter = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [

                {
                    text: strings.cancel,
                    onPress: () => console.warn('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: strings.ordering,
                    onPress: () => {
                        completeOrder();
                        modalOn(false);
                    },
                    style: 'destructive',
                },
            ],
            {cancelable: false},
        );
    };
    const completeOrder = () => {
        console.warn('ordered');
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageWrapper}>
                    <Image style={{
                        flex: 1,
                        resizeMode: 'cover',
                    }}
                           source={{
                               uri: item && item.images[0],
                           }}/>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{item && item.name}</Text>
                    <Text style={styles.text}>{strings.minimumOrder} {item && item.min_order}</Text>
                    <Text style={styles.price}>{item && item.price} {strings.priceUnit}</Text>
                </View>
                <View style={{
                    marginRight: -10,
                    marginTop: -5,
                }}>
                    <Touchable onPress={() => {
                        modalOn(false);
                    }}>
                        <MaterialIcons name='close' size={30} color={colors.white}/>
                    </Touchable>
                </View>
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.contentTitle}>
                        {strings.option}:
                    </Text>
                </View>
                <View>
                    {loading ? (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ActivityIndicator size="large" color="#00ff00"/>
                        </View>) : (
                        <FlatList
                            style={{
                                height: 300,
                            }}
                            data={stockList}
                            keyExtractor={item => item._id}
                            renderItem={({item}) => <ProductInCheckout
                                item={item}
                                setCount={setTotalCount}
                                count={totalCount}
                                setTypeCount={setSelectedType}
                                typeCount={selectedType}
                                setPrice={setTotalPrice}
                                price={totalPrice}
                                createOrderList={setOrderList}
                                createdOrder={orderList}
                                copyOfOrderList={stockList}
                            />}

                        />)}
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.overall}>
                        <Text style={{
                            color: colors.green,
                        }}>
                            {selectedType}{' '}
                        </Text>
                        <Text>
                            {strings.type},{'  '}
                        </Text>
                        <Text style={{
                            color: colors.green,
                        }}>
                            {totalCount}{' '}
                        </Text>
                        <Text>
                            {strings.piece}, {strings.totalPrice}:{'  '}
                        </Text>
                        <Text style={{
                            color: colors.green,
                        }}>
                            {totalPrice}{' '}
                        </Text>
                        <Text>
                            {strings.uzs}
                        </Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Touchable onPress={() => {
                            console.warn('some');
                            alerter();
                        }}>
                            <View>
                                <FilledButton text={strings.ordering}/>
                            </View>
                        </Touchable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 480,
        backgroundColor: colors.white,
        // borderBottomRightRadius: 40,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: colors.green,
        // borderBottomRightRadius: 40,
    },
    imageWrapper: {
        overflow: 'hidden',
        height: 85,
        width: 85,
        // borderRadius: 10,
    },
    textWrapper: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        marginBottom: 7,
    },
    price: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    content: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    contentTitle: {
        fontSize: 20,
        color: colors.black,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    bottomWrapper: {
        alignItems: 'center',
    },
    overall: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingTop: 60,
    },
    buttonWrapper: {
        paddingHorizontal: 100,
    },
});

export default Checkout;
