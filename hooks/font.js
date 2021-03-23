import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Font = (props) => {
  const [loaded] = useFonts({
    DM_Sans: require("../assets/fonts/DM_Sans/DMSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={styles.dmSansBold}
      style={{
        fontSize: props.size,
        color: props.color,
        fontWeight: props.weight,
        letterSpacing: props.spacing,
        textAlign: props.align,
      }}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  dmSansBold: {
    fontFamily: "DM_Sans",
  },
});

export default Font;
