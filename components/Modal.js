import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';

const Modal = ({isOpen = true, children}) => {
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
    outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'],
  });
  useEffect(animate, [isOpen]);
  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, {backgroundColor}]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Modal;
