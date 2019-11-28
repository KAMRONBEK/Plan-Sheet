import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import LevelOneCategory from '../../components/LevelOneCategory';
import LevelTwoCategory from '../../components/LevelTwoCategory';
import LevelThreeCategory from '../../components/LevelThreeCategory';
import {useLazyQuery, useQuery} from '@apollo/react-hooks';
import {GET_ROOT_CATEGORY, GET_FIRST_CATEGORY} from '../../graphql/requests';
import Touchable from '../../components/Touchable';

const Category = ({navigation}) => {
    const levelOneList = [
        {id: 1, title: 'Black and Tan'},
        {id: 2, title: 'Black Velvet'},
        {id: 3, title: 'Boilermaker'},
        {id: 4, title: 'Hangman`s Blood'},
        {id: 5, title: 'Irish Car Bomb'},
        {id: 6, title: 'Michelada'},
        {id: 7, title: 'Porchcrawler'},
        {id: 8, title: 'Sake Bomb'},
        {id: 9, title: 'Shandy'},
        {id: 10, title: 'Snakebite'},
        {id: 11, title: 'U-Boot'},
    ];
    const levelTwoList = [
        {id: 1, title: 'Black and Tan'},
        {id: 2, title: 'Black Velvet'},
        {id: 3, title: 'Boilermaker'},
        {id: 4, title: 'Hangman`s Blood'},
    ];
    const levelThreeList = [
        {id: 1, title: 'Black and Tan'},
        {id: 2, title: 'Black Velvet'},
        {id: 3, title: 'Boilermaker'},
        {id: 4, title: 'Hangman`s Blood'},
        {id: 5, title: 'Irish Car Bomb'},
        {id: 6, title: 'Michelada'},
        {id: 7, title: 'Porchcrawler'},
        {id: 8, title: 'Sake Bomb'},
        {id: 9, title: 'Shandy'},
        {id: 10, title: 'Snakebite'},
        {id: 11, title: 'U-Boot'},
    ];

    let [secondDisplay, setSecondDisplay] = useState(false);
    let [secondData, setSecondData] = useState([]);

    let [thirdDisplay, setThirdDisplay] = useState(false);
    let [thirdData, setThirdData] = useState([]);
    const {navigate} = navigation;

    const [getFirstCategory, {loading: loadingFirst, data: dataFirst, error: errorFirst}] = useLazyQuery(GET_FIRST_CATEGORY);

    const {loading, data, error} = useQuery(GET_ROOT_CATEGORY);

    useEffect(() => {
        console.warn('sukaaaaa');
        if (data) {
            console.warn(data);
            console.warn(data.getRootCategory._id);
            getFirstCategory({
                variables: {
                    parentCategoryID: data.getRootCategory._id,
                },
            });
            console.warn('getfirsdt');
        }
    }, [data]);

    if (loadingFirst) {
        console.warn('loaduing first');
    }
    if (dataFirst) {
        console.warn(dataFirst);
    }
    if (errorFirst) {
        console.warn(error.message);
    }



    if (error) {
        console.warn(error.message);
    }

    if (loading) {
        return <View>
            <Text>loading...</Text>
        </View>;
    }

    return (

        <View style={styles.container}>
            <View style={styles.left}>
                <FlatList
                    data={dataFirst && dataFirst.getCategoryChilds || []}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => <LevelOneCategory item={item} navigation={navigation}
                                                              visibility={setSecondDisplay}
                                                              thirdVisibility={setThirdDisplay}/>}
                />
            </View>
            <View style={styles.middle}>
                {secondDisplay ? (
                    <FlatList
                        data={levelTwoList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <LevelTwoCategory item={item} navigation={navigation}
                                                                  visibility={setThirdDisplay}/>}
                    />
                ) : <View/>}
            </View>
            <View style={styles.right}>
                {thirdDisplay ? (
                    <FlatList
                        data={levelThreeList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <LevelThreeCategory item={item} navigation={navigation}
                                                                    onPress={() => navigate('Main')}/>}
                    />
                ) : <View/>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 3,
        marginRight: 5,
    },
    middle: {
        flex: 5,
        marginHorizontal: 5,
    },
    right: {
        flex: 7,
        marginLeft: 5,
    },
});

export default Category;
