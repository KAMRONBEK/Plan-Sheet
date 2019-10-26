import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';
import Touchable from './Touchable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// example

let Header = ({...rest}) => {
  let {onTabPress, renderIcon, getLabelText, navigation} = rest;
  let {state} = navigation;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.green,
        },
      ]}>
      {state.routes.map((route, key) => {
        const focused = key === state.index;
        let scene = {route, focused};
        return (
          <Touchable {...{key}} onPress={() => onTabPress(scene)}>
            <View {...{key}} style={styles.bar}>
              <Text
                style={[styles.title, {color: colors.white, marginRight: 10}]}>
                {renderIcon(scene)}
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    color: colors.white,
                  },
                ]}>
                {getLabelText(scene)}
              </Text>
            </View>
          </Touchable>
        );
      })}
      <View
        style={[
          styles.bonus,
          {
            backgroundColor: colors.paleyellow,
          },
        ]}>
        <FontAwesome5 name="coins" size={15} color={colors.yellow} />
        <Text style={styles.bonusText}>50</Text>
      </View>
      <View style={[styles.profile, {}]}>
        <Image
          source={{
            uri:
              'https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1	',
          }}
          style={{
            flex: 1,
            resizeMode: 'cover',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bar: {
    flexDirection: 'row',
    paddingVertical: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  bonus: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  bonusText: {
    paddingLeft: 10,
    fontSize: 16,
  },
  profile: {
    borderRadius: 100,
    height: 70,
    flexBasis: 70,
    overflow: 'hidden',
  },
});

export default Header;
