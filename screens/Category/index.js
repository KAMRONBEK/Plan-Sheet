import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import LevelOneCategory from '../../components/LevelOneCategory';
import LevelTwoCategory from '../../components/LevelTwoCategory';
import LevelThreeCategory from '../../components/LevelThreeCategory';

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
    return (

        <View style={styles.container}>
            <View style={styles.left}>
                <FlatList
                    data={levelOneList}
                    keyExtractor={item => item.id.toString()}
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
