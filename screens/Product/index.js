import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';

const Product = ({navigation}) => {
    let [item, setItem] = useState({});

    useEffect(() => {
        setItem(navigation.getParam('item'));
    }, []);

    console.warn(item);
    // let [item, setItem] = useState(navigation.getParam(item));
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <Text>product</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Product;
