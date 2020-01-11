import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet, RefreshControl, ActivityIndicator, Alert} from 'react-native';
import ProductCardHistory from '../../components/ProductCardHistory';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import colors from '../../constants/colors';

import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GET_SHOP_ORDER_HISTORY, GET_PRODUCT_DATA} from '../../graphql/requests';
import Checkout from '../Checkout';
import strings from '../../localization/strings';

const History = ({navigation}) => {

    let [historyList, setHistoryList] = useState([]);
    let {loading, data, error} = useQuery(GET_SHOP_ORDER_HISTORY, {
        variables: {
            next: 1, pageSize: 10,
        },
    });

    let [selectedProductData, {loading: productLoading, data: productData, error: productError}] = useLazyQuery(GET_PRODUCT_DATA);


//refresh control
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

    // modal
    let [modalVisibility, setModalVisibility] = useState(false);
    let [selectedItemId, setSelectedItemID] = useState('');
    let [successVisibility, setSuccessVisibility] = useState(false);
    let [alertVisibility, setAlertVisibility] = useState(false);
    let [customItem, setCustomItem] = useState({});

    useEffect(() => {
        if (!!data) {
            setHistoryList(data.getShopOrderHistory.orders);
        }

        if (!!selectedItemId) {
            console.warn('selected');
            setCustomItem({...customItem, _id: selectedItemId});
        }

        // if (!!selectedItemId) {
        //     selectedProductData({
        //         variables: {
        //             product_id: selectedItemId,
        //         },
        //     });
        // }
        console.warn(historyList);
    }, [data]);
    return (
        <React.Fragment>
            {loading ? (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View>
            ) : (
                <React.Fragment>
                    <ScrollView style={styles.container} refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }>
                        <View style={styles.listWrapper}>
                            <FlatList
                                keyExtractor={item => item._id}
                                data={historyList}
                                renderItem={({item}) => <ProductCardHistory
                                    item={item}
                                    modalOn={setModalVisibility}
                                    setItem={setSelectedItemID}
                                />}
                            />
                        </View>
                    </ScrollView>
                    {!!selectedItemId !== '' && modalVisibility &&
                    <Modal isOpen={modalVisibility} navigation={navigation}>
                        {<Checkout
                            item={customItem}
                            // item={!!productData && productData.getProductById}
                            navigation={navigation}
                            modalOn={setModalVisibility}
                            alertOn={setAlertVisibility}
                        />}
                    </Modal>}
                    {
                        alertVisibility && Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {
                                    text: 'Cancel',
                                    onPress: () => console.warn('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {text: 'OK', onPress: () => console.warn('OK Pressed')},
                            ],
                            {cancelable: false},
                        )
                    }
                    {successVisibility && <Modal isOpen={successVisibility} navigation={navigation}>
                        <View style={{
                            padding: 80,
                            backgroundColor: colors.white,
                        }}>
                            <Text style={{
                                fontSize: 25,
                            }}>{strings.orderSuccessful}</Text>
                        </View>
                    </Modal>}
                </React.Fragment>
            )}
        </React.Fragment>
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
