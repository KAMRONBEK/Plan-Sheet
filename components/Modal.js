import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

const Modal = ({isOpen = true, children,navigation}) => {
    const [visible, setVisible] = useState(isOpen);
    let animation = new Animated.Value(0);
    let animate = () => {
        Animated.spring(animation, {
            toValue: isOpen ? 1 : 0,
        }).start(() => {
            if (!isOpen) {
                setVisible(!visible);
            }
        });
        return animate;
    };
    let backgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)'],
    });
    let scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [.5, 1],
        extrapolate: 'clamp',
    });
    useEffect(animate, [isOpen]);
    if (!visible) {
        return null;
    }

    return (
        <Animated.View style={[styles.container, {backgroundColor}]}>
            <Animated.View style={[{transform: [{scale}]}]}>
                {children}
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:-80,
        flex: 1,
        position: 'absolute',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
});

export default Modal;
