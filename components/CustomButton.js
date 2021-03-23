import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.button}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#31A062",
    width: 354,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default CustomButton;
