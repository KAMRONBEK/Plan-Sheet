import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import strings from '../localization/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import Touchable from './Touchable';

const ProductInCheckout = ({item, setCount, count, setTypeCount, typeCount, setPrice, price, addItem, createOrderList, createdOrder,copyOfOrderList}) => {
    let [selected, setSelected] = useState(0);
    let totalCount = count;
    let selectedType = typeCount;
    let totalPrice = price;
    let [stockList, setStockList] = useState([]);
    let [currentItem, setCurrentItem] = useState({});
    const changeQty = () => {
        if (!!item) {
            console.warn(item._id);
            // setStockList([]);
            console.warn(createdOrder);
            !!copyOfOrderList && copyOfOrderList.map((stockItem, index) => {
                if (stockItem._id !== item._id) {
                    setStockList([...stockList, stockItem]);
                } else if (stockItem._id === item._id) {
                    console.warn(stockItem);
                    setCurrentItem({...stockItem, qty: selected + 1});
                    setStockList([...stockList, currentItem]);
                    createOrderList(stockList);
                }
            });
            // setStockList([{_id: item._id, title: item.title, qty: selected + 1}]);
        }
    };

    useEffect(() => {
        console.warn(createdOrder);
        console.warn('createdOrder');
    }, [createdOrder]);

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                    }}
                    source={{
                        uri: item.image,
                    }}
                />
            </View>
            <View style={styles.textWrapper}>
                <Text>{item.title}</Text>
                <Text>{item.price} {strings.priceUnit}</Text>
            </View>
            <View>
                <View style={styles.sickSelector}>
                    <Touchable onPress={() => {
                        (selected === 1 && typeCount > 0) ? setTypeCount(selectedType - 1) : setTypeCount(selectedType);
                        (count > 0 && selected > 0) ? setCount(totalCount - 1) : setCount(count);
                        (selected > 0) ? setSelected(selected - 1) : setSelected(0);
                        (selected > 0) ? setPrice(totalPrice - item.price) : setPrice(totalPrice);
                        changeQty();
                    }}>
                        <View style={styles.minus}>
                            <MaterialIcons name='remove' size={20} style={{
                                color: (selected === 0) ? colors.paleGray : colors.green,
                            }}/>
                        </View>
                    </Touchable>
                    <View style={styles.numberWrapper}>
                        <Text style={styles.number}>{selected}</Text>
                    </View>
                    <Touchable onPress={() => {
                        setSelected(selected + 1);
                        setCount(totalCount + 1);
                        setPrice(totalPrice + item.price);
                        (selected === 0) ? setTypeCount(typeCount + 1) : setTypeCount(typeCount);
                        changeQty();
                    }}>
                        <View style={styles.plus}>
                            <MaterialIcons name='add' size={20} style={{
                                color: colors.green,
                            }}/>
                        </View>
                    </Touchable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.borderGray,
    },
    imageWrapper: {},
    textWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    sickSelector: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0,
        // borderRadius: 16,
        backgroundColor: colors.grayish,
        // elevation: 2,
    },
    plus: {
        width: 40,
        alignItems: 'center',
        // marginLeft: -10,
        paddingHorizontal: 5,
        paddingVertical: 6,
        marginTop: -1,
        backgroundColor: colors.borderGray,
    },
    minus: {
        width: 40,
        alignItems: 'center',
        // marginRight: -10,
        paddingHorizontal: 5,
        paddingVertical: 6,
    },
    numberWrapper: {
        width: 40,
        height: 35,
        // borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProductInCheckout;
