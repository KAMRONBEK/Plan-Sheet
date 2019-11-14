import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BonusItem from '../../components/BonusItem';
import Touchable from '../../components/Touchable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';

const Bonus = ({navigation}) => {
    let {vavigate} = navigation;

    const bonusList = [
        {
            id: 1,
            image: 'https://static-assets.glossier.com/production/spree/images/attachments/000/004/423/portrait_normal/futuredew-soloproduct_682_leftedge_copy.jpg?1569419908',
            name: 'titan gel',
            cost: 49,
        },
        {
            id: 2,
            image: 'https://peopleworksin.files.wordpress.com/2014/08/google_glass_89449.jpg',
            name: 'smart glass',
            cost: 60,
        },
        {
            id: 3,
            image: 'https://www.ipsos.com/sites/default/files/styles/320x229_crop_4_3/public/content/colution/2019-07/product-testing.jpg',
            name: 'smart watch',
            cost: 70,
        },
        {
            id: 4,
            image: 'https://www.wipo.int/export/sites/www/wipo_magazine/images/2015_03_art_2_1.jpg',
            name: 'planshit',
            cost: 40,
        },
        {
            id: 5,
            image: 'https://ksr-ugc.imgix.net/assets/022/082/545/af66e1c850561982626ce8b462bb291d_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1533053742&auto=format&gif-q=50&q=92&s=5ea85be45eab4d5a85670ace13ee1ebf',
            name: 'super mupper bag',
            cost: 51,
        },
        {
            id: 6,
            image: 'https://fuse-innovation.com/wp-content/uploads/warner-music-muse.jpg',
            name: 'fveshka',
            cost: 52,
        }, {
            id: 7,
            image: 'https://www.wipo.int/export/sites/www/wipo_magazine/images/2015_03_art_2_1.jpg',
            name: 'planshit',
            cost: 40,
        }, {
            id: 8,
            image: 'https://static-assets.glossier.com/production/spree/images/attachments/000/004/423/portrait_normal/futuredew-soloproduct_682_leftedge_copy.jpg?1569419908',
            name: 'titan gel',
            cost: 49,
        },
        {
            id: 9,
            image: 'https://ksr-ugc.imgix.net/assets/022/082/545/af66e1c850561982626ce8b462bb291d_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1533053742&auto=format&gif-q=50&q=92&s=5ea85be45eab4d5a85670ace13ee1ebf',
            name: 'super mupper bag',
            cost: 51,
        },
        {
            id: 10,
            image: 'https://www.wipo.int/export/sites/www/wipo_magazine/images/2015_03_art_2_1.jpg',
            name: 'planshit',
            cost: 40,
        },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Touchable onPress={() => navigation.goBack()}>
                    <View style={{
                        padding: 10,
                        borderRadius: 10,
                    }}>
                        <MaterialIcons name='arrow-back' size={30} style={{color: colors.textGray}}/>
                    </View>
                </Touchable>
            </View>
            <View style={styles.content}>
                <FlatList
                    numColumns={4}
                    data={bonusList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <BonusItem item={item} navigation={navigation}/>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40
    },
    top: {
        padding: 10,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
    },
});

export default Bonus;
