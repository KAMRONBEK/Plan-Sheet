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
    }, {
        id: 4,
        image: 'http://lemon.press/wp-content/uploads/2015/03/dsc_5694-2.jpg',
        stockTitle: 'mevasiz milk',
        selectedAmount: 0,
        price: 17000,
    },
];

const Checkout = ({navigation, item, modalOn, alertOn}) => {

    let [selectedType, setSelectedType] = useState(0);
    let [totalCount, setTotalCount] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);

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
                        style={{
                            height: 300,
                        }}
                        data={StockList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <ProductInCheckout
                            item={item}
                            setCount={setTotalCount}
                            count={totalCount}
                            setTypeCount={setSelectedType}
                            typeCount={selectedType}
                            setPrice={setTotalPrice}
                            price={totalPrice}
                        />}

                    />
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
                            alertOn(true);
                            console.warn('some');
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
