import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList, Alert} from 'react-native';
import {useLazyQuery, useQuery} from '@apollo/react-hooks';
import {GET_MAIN_CATEGORY, GET_PRODUCT_UNDER_CATEGORY} from '../../graphql/requests';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';
import Checkout from '../Checkout';
import colors from '../../constants/colors';
import strings from '../../localization/strings';

const Shelf = ({navigation, categoryID}) => {

    let [modalVisibility, setModalVisibility] = useState(false);
    let [selectedItemId, setSelectedItemID] = useState('');
    let [successVisibility, setSuccessVisibility] = useState(false);
    let [alertVisibility, setAlertVisibility] = useState(false);

    // const navigate = {navigation};
    // const [verifyUser, {loading, data, error}] = useLazyQuery(VERIFY_SHOP);
    // if (data) {
    //     console.warn(data);
    //     dispatch(userLoaded(data.loginShop));
    //     navigate('Main', {});
    // }
    // alert

    console.warn('shelf');
    console.warn(navigation.getParam('category_id'));

    let [loadProducts, {loading, data, error}] = useLazyQuery(GET_PRODUCT_UNDER_CATEGORY);

    if (loading) {
        console.warn('laoding');
    }
    let category_id = navigation.getParam('category_id');

    useEffect(() => {
        if (!!category_id) {
            loadProducts({
                variables: {
                    category_id: category_id,
                    pageSize: 10,
                    next: 1,
                },
            });
        }
    }, [category_id]);

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
                    <Text>
                        botga Aziz aka title quyishi kere
                    </Text>
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
                                  alertOn={setAlertVisibility}/>
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

export default Shelf;
