import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, ActivityIndicator} from 'react-native';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import colors from '../../constants/colors';
import ProductCardHistory from '../../components/ProductCardHistory';
import Checkout from '../Checkout';
import strings from '../../localization/strings';

import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import {GET_MAIN_CATEGORY, GET_PRODUCT_UNDER_CATEGORY} from '../../graphql/requests';

// qgl
import {LOGIN_USER, VERIFY_SHOP} from '../../graphql/requests';
import {userLoaded} from '../../actions/userActions';


let Main = ({navigation}) => {

    let [modalVisibility, setModalVisibility] = useState(false);
    let [selectedItemId, setSelectedItemID] = useState('');
    let [successVisibility, setSuccessVisibility] = useState(false);

    // const navigate = {navigation};
    // const [verifyUser, {loading, data, error}] = useLazyQuery(VERIFY_SHOP);
    // if (data) {
    //     console.warn(data);
    //     dispatch(userLoaded(data.loginShop));
    //     navigate('Main', {});
    // }
    // alert


    let {loading: loadingCategory, data: dataCategory, error: errorCategory} = useQuery(GET_MAIN_CATEGORY);
    let [loadProducts, {loading, data, error}] = useLazyQuery(GET_PRODUCT_UNDER_CATEGORY);

    if (loading) {
        console.warn('laoding');
    }
    if (!!dataCategory) {
        console.warn(dataCategory);
    }

    useEffect(() => {
        if (!!dataCategory) {
            loadProducts({
                variables: {
                    category_id: dataCategory.verifyShop.category_id,
                    pageSize: 10,
                    next: 1,
                },
            });
        }
    }, [dataCategory]);

    return (
        <React.Fragment>
            {loading ? (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View>) : (
                <View style={styles.container}>
                    <View style={styles.listWrapper}>
                        <FlatList
                            keyExtractor={item => item._id}
                            data={data && data.getProductBatchUnderCategory.products || []}
                            renderItem={({item}) => <ProductCard
                                item={item}
                                navigation={navigation}
                                modalOn={setModalVisibility}
                                setItem={setSelectedItemID}/>}
                        />
                    </View>
                    {selectedItemId !== '' && modalVisibility &&
                    <Modal isOpen={modalVisibility} navigation={navigation}>
                        {/*<View style={{padding: 300, backgroundColor: colors.white}}>*/}

                        {/*</View>*/}
                        <Checkout item={data.getProductBatchUnderCategory.products.find((product, index) => {
                            if (product._id === selectedItemId) {
                                console.warn('this is selected');
                                console.warn(product);
                                return product;
                            }
                        })}
                                  navigation={navigation} modalOn={setModalVisibility}
                        />
                    </Modal>}
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
                </View>)}
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

export default Main;
