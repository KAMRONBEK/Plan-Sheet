import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Touchable from './Touchable';

const LevelOneCategory = ({item, visibility, thirdVisibility, setSecondCategory}) => {
    return (
        <Touchable onPress={() => {
            visibility(true);
            thirdVisibility(false);
            setSecondCategory({
                variables: {
                    parentCategoryID: item._id,
                },
            });
        }}>
            <View style={styles.container}>
            <MaterialIcons name='redeem' color={colors.paleGray} size={30}/>
            <Text>{item.name}</Text>
            </View>
            </Touchable>
            );
            };

            const styles = StyleSheet.create({
            container: {
            flex: 1,
            backgroundColor: colors.categoryOneColor,
            borderBottomWidth: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.white,
            paddingVertical: 15,
            },
            });

            export default LevelOneCategory;
