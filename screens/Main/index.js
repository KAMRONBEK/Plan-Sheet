import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import colors from '../../constants/colors';
import ProductCardHistory from '../../components/ProductCardHistory';
import Checkout from '../Checkout';
import strings from '../../localization/strings';

// qgl
import {LOGIN_USER, VERIFY_SHOP} from '../../graphql/requests';
import {userLoaded} from '../../actions/itemActions';
import {useLazyQuery} from '@apollo/react-hooks';


let Main = ({navigation}) => {
    let ProductList = [
        {
            id: 1,
            image:
                'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9M2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1566855245932',
            name: 'Yovvoyi yongz\'mli',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 2,
            image:
                'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
            name: 'Yovvoyi yoz\'mli',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 3,
            image:
                'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9M2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1566855245932',
            name: 'Yovvoyi yoz\'mli',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 4,
            image:
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX0F2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1566857013200',
            name: 'Yovvoyi yongzmli',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 5,
            image:
                'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
            name: 'Yovvoyi yonzmli',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 6,
            image:
                'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9M2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1566855245932',
            name: 'Yovvoyi yozyib ta\'mli',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 7,
            image:
                'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
            name: 'Yovvoyi yong\'oq z',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },

        {
            id: 8,
            image:
                'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX0F2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1566857013200',
            name: 'Yovvoyi yong\'oq z',
            remaining: 55,
            minimumOrder: 5,
            price: 17000,
            ifFavorite: false,
            manufacturer: 'Rash Milk MCHJ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];

    let [modalVisibility, setModalVisibility] = useState(false);
    let [selectedItemId, setSelectedItemID] = useState(-1);
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


    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.listWrapper}>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={ProductList}
                        renderItem={({item}) => <ProductCard
                            item={item}
                            navigation={navigation}
                            modalOn={setModalVisibility}
                            setItem={setSelectedItemID}/>}
                    />
                </View>
                {modalVisibility && <Modal isOpen={modalVisibility} navigation={navigation}>
                    {/*<View style={{padding: 300, backgroundColor: colors.white}}>*/}

                    {/*</View>*/}
                    <Checkout item={ProductList[1]} navigation={navigation} modalOn={setModalVisibility}
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
            </View>
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
