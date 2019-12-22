import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import ProductCardHistory from '../../components/ProductCardHistory';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import colors from '../../constants/colors';

import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GET_SHOP_ORDER_HISTORY} from '../../graphql/requests';

const History = ({navigation}) => {
    const ProductList = [
        {
            id: 1,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'delivered',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '16000',
        },
        {
            id: 2,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'unpaid',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '16000',
        },
        {
            id: 3,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'delivered',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '18000',
        },
        {
            id: 4,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'canceled',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '16000',
        },
        {
            id: 5,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'ordered',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '19000',
        },
        {
            id: 6,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'beingDelivered',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '18000',
        },
        {
            id: 7,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'unpaid',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '16000',
        },
        {
            id: 8,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'canceled',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '16000',
        },
        {
            id: 9,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'ordered',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '20000',
        },
        {
            id: 10,
            name: 'Yangi sog\'ilgan sut',
            image:
                'https://5.imimg.com/data5/KD/RH/MY-3966004/milk-products-500x500.jpg',
            remaining: '55',
            minimumOrder: '5',
            manufacturer: 'Rash Milk MCHJ',
            price: '17000',
            status: 'beingDelivered',
            orderAmount: 7,
            orderPrice: '70000',
            orderDate: '10/23/19   9:23 pm',
            deliveryDate: '10/23/19   9:23 pm',
            oldPrice: '16000',
        },
    ];

    let [historyList, setHistoryList] = useState([]);
    let {loading, data, error} = useQuery(GET_SHOP_ORDER_HISTORY, {
        variables: {
            next: 1, pageSize: 10,
        },
    });

    useEffect(() => {
        if (!!data) {
            setHistoryList(data.getShopOrderHistory.orders);
        }
        console.warn(historyList);
    }, [data]);

    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <ScrollView style={styles.container} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>
            <View style={styles.listWrapper}>
                <FlatList
                    keyExtractor={item => item._id}
                    data={historyList}
                    renderItem={({item}) => <ProductCardHistory item={item}/>}
                />
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listWrapper: {
        paddingHorizontal: 20,
    },
});

export default History;
