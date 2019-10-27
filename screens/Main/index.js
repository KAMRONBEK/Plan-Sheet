import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

let Main = () => {
  let ProductList = [
    {
      id: 1,
      image:
        'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
        'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
        'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
        'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
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
        'https://www.gaelscoilriada.com/wp-content/uploads/2019/09/Bainne.jpg',
      name: "Yovvoyi yong'oq juda ajoyib ta'mli",
      remaining: 55,
      minimumOrder: 5,
      price: 17000,
      ifFavorite: false,
      manufacturer: 'Rash Milk MCHJ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header />
        <View style={styles.listWrapper}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={ProductList}
            renderItem={({item}) => <ProductCard item={item} />}
          />
        </View>
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
