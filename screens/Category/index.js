import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator,LayoutAnimation} from 'react-native';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import LevelOneCategory from '../../components/LevelOneCategory';
import LevelTwoCategory from '../../components/LevelTwoCategory';
import LevelThreeCategory from '../../components/LevelThreeCategory';
import {useLazyQuery, useQuery} from '@apollo/react-hooks';
import {GET_ROOT_CATEGORY, GET_CHILD_CATEGORY} from '../../graphql/requests';
import Touchable from '../../components/Touchable';

const Category = ({navigation}) => {

    const [getFirstCategory, {loading: loadingFirst, data: dataFirst, error: errorFirst}] = useLazyQuery(GET_CHILD_CATEGORY);


    let [secondDisplay, setSecondDisplay] = useState(false);
    const [getSecondCategory, {loading: loadingSecond, data: dataSecond, error: errorSecond}] = useLazyQuery(GET_CHILD_CATEGORY);

    let [thirdDisplay, setThirdDisplay] = useState(false);
    const [getThirdCategory, {loading: loadingThird, data: dataThird, error: errorThird}] = useLazyQuery(GET_CHILD_CATEGORY);

    const {navigate} = navigation;



    const {loading, data, error} = useQuery(GET_ROOT_CATEGORY);

    useEffect(() => {
        if (data) {
            getFirstCategory({
                variables: {
                    parentCategoryID: data.getRootCategory._id,
                },
            });
        }
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
                ) :
                <View style={styles.container}>
                    <View style={styles.left}>
                        <FlatList
                            data={dataFirst && dataFirst.getCategoryChilds || []}
                            keyExtractor={item => item._id}
                            renderItem={({item}) => <LevelOneCategory item={item} navigation={navigation}
                                                                      visibility={setSecondDisplay}
                                                                      setSecondCategory={getSecondCategory}
                                                                      thirdVisibility={setThirdDisplay}/>}
                        />
                    </View>
                    {loadingSecond ? (
                        <View style={[styles.middle, {
                            height: 300,
                            justifyContent: 'center',
                        }]}>
                            <ActivityIndicator size="large" color="#00ff00"/>
                        </View>
                    ) : (
                        <View style={styles.middle}>
                            {secondDisplay ? (
                                <FlatList
                                    data={dataSecond && dataSecond.getCategoryChilds || []}
                                    keyExtractor={item => item._id}
                                    renderItem={({item}) => <LevelTwoCategory item={item} navigation={navigation}
                                                                              setThirdCategory={getThirdCategory}
                                                                              visibility={setThirdDisplay}/>}
                                />
                            ) : <View/>}
                        </View>
                    )}
                    {
                        loadingThird ? (
                            <View style={[styles.right, {
                                height: 300,
                                justifyContent: 'center',
                            }]}>
                                <ActivityIndicator size="large" color="#00ff00"/>
                            </View>
                        ) : (
                            <View style={styles.right}>
                                {thirdDisplay ? (
                                    <FlatList
                                        data={dataThird && dataThird.getCategoryChilds || []}
                                        keyExtractor={item => item._id}
                                        renderItem={({item}) => <LevelThreeCategory item={item} navigation={navigation}
                                        />}
                                    />
                                ) : <View/>}
                            </View>
                        )
                    }
                </View>
            }
        </React.Fragment>
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
