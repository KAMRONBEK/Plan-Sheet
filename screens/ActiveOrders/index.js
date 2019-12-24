import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import ProductCardHistory from '../../components/ProductCardHistory';

import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GET_SHOP_ACTIVE_ORDER} from '../../graphql/requests';

const ActiveOrders = ({navigation}) => {

    let [activeOrderList, setActiveOrderList] = useState([]);
    let {loading, data, error} = useQuery(GET_SHOP_ACTIVE_ORDER, {
        variables: {
            next: 1, pageSize: 10,
        },
    });


    useEffect(() => {
        if (!!data) {
            setActiveOrderList(data.getShopActiveOrderBatch.orders);
        }
        console.warn(activeOrderList);
    }, [data]);

    //refreshControl
    const [refreshing, setRefreshing] = useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // loadActiveOrder({
        //     variables: {
        //         next: 1, pageSize: 10,
        //     },
        // });

        if (data) {
            setRefreshing(false);
        }

        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <ScrollView style={styles.container} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>
            <View style={styles.listWrapper}>
                <FlatList
                    keyExtractor={item => item._id}
                    data={activeOrderList}
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


export default ActiveOrders;
