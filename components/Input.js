import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.styles }}
      placeholder={props.holder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 60,
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 10,
    paddingLeft: 25,
  },
});

export default Input;
