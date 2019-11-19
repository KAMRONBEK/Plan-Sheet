import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import colors from '../../constants/colors';
import strings from '../../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Touchable from '../../components/Touchable';
import ProductInCheckout from '../../components/ProductInCheckout';
import ProductCard from '../../components/ProductCard';
import RoundedButton from '../../components/RoundedButton';
import FilledButton from '../../components/FilledButton';

let StockList = [
    {
        id: 1,
        image: 'https://www.kitchenstuffplus.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/3/93102_40000_artland-dairy-clear-milk-bottle-drinking-glass-set-of-8.jpg',
        stockTitle: 'qora milk',
        selectedAmount: 0,
        price: 12000,
    }
    , {
        id: 2, image: 'https://static.toiimg.com/photo/67975826.cms',
        stockTitle: 'zur milk',
        selectedAmount: 0,
        price: 15000,
    }, {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYXBw9qNRBgxsFFOcanxQjp9Lqi_psBxJHgCk6Zocd-TnwKqnuw&s',
        stockTitle: 'mevali milk',
        selectedAmount: 0,
        price: 18000,
    },
];

const Checkout = ({navigation, item, modalOn}) => {


    console.warn(item);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageWrapper}>
                    <Image style={{
                        flex: 1,
                        resizeMode: 'cover',
                    }}
                           source={{
                               uri: item.image,
                           }}/>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.text}>{strings.minimumOrder} {item.minimumOrder}</Text>
                    <Text style={styles.price}>{item.price} {strings.priceUnit}</Text>
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
                    <FlatList
                        data={StockList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <ProductInCheckout item={item}/>}
                    />
                </View>
                <View style={styles.bottomWrapper}>
                    <Text style={styles.overall}>0 tur , 0 dona, Umumiy narxi: UZS 0</Text>
                    <View style={styles.buttonWrapper}>
                        <FilledButton text={strings.ordering}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 450,
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
        paddingVertical: 20,
        paddingTop: 60,
    },
    buttonWrapper: {
        paddingHorizontal: 100,
    },
});

export default Checkout;
