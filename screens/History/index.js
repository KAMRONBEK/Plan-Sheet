import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ProductCardHistory from '../../components/ProductCardHistory';
import Header from '../../components/Header';

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
        },
    ];
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.listWrapper}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={ProductList}
                    renderItem={({item}) => <ProductCardHistory item={item}/>}
                />
            </View>
        </View>
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
