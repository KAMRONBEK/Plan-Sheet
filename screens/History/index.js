import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import ProductCardHistory from '../../components/ProductCardHistory';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import colors from '../../constants/colors';

import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GET_SHOP_ORDER_HISTORY} from '../../graphql/requests';

const History = ({navigation}) => {

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
