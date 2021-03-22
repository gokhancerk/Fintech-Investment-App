import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignUp = (props) => {
  return (
    <View>
      <Button title="Create Account" />
      <Button title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUp;
