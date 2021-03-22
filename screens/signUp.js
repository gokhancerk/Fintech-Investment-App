import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Details")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUp;
