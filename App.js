import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { animated, useSpring } from "react-spring/native";

const AnimatedView = animated(View);
const shadowFrom = Platform.select({
  android: { elevation: 0 },
  ios: {
    height: 0,
    width: 0,
    shadowColor: "#000000",
    shadowOpacity: 0,
    shadowRadius: 0
  }
});
const shadowTo = Platform.select({
  android: { elevation: 20 },
  ios: {
    shadowColor: "#000000",
    height: 7.4,
    width: 0,
    shadowOpacity: 0.3,
    shadowRadius: 7
  }
});

export default () => {
  const motionProps = useSpring({
    config: { friction: 30, tension: 50 },
    from: shadowFrom,
    to: shadowTo
  });

  let motionStyle;

  if (Platform.OS === "ios") {
    motionStyle = {
      ...styles.box,
      shadowColor: motionProps.shadowColor,
      /*
       * If you comment out the shadowOffset object below everything works,
       * so the error happens when we try to animate props of shadowOffset.
       */
      shadowOffset: {
        height: motionProps.height,
        width: motionProps.width
      },
      /**/

      /*
       * If you comment the above shadowOffset object and uncomment the below one,
       * everything works, we can see shadowOffset style applied,
       * we just can't animate them.
       */
      /*
      shadowOffset: {
        height: 7.4,
        width: 0
      },
      */
      shadowOpacity: motionProps.shadowOpacity,
      shadowRadius: motionProps.shadowRadius
    };
  } else {
    motionStyle = {
      ...styles.box,
      ...motionProps
    };
  }

  return <AnimatedView style={motionStyle} />;
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "blue",
    height: 50,
    margin: 50,
    width: 100
  }
});
