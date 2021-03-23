import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Font from "../hooks/font";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/signUp/signup.png")} />

      <Font size={34} weight={"bold"} align={"center"}>
        Stay on top of your finance with us.
      </Font>

      <View style={styles.info}>
        <Font size={17} color={"#4F4F4F"} align={"center"}>
          We are your new financial Advisors to recommed the best investments
          for you.
        </Font>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Account")}
      >
        <CustomButton title={"Create account"} />
      </TouchableOpacity>

      {/* <Button
        title="Create Account"
        onPress={() => navigation.navigate("Details")}
      /> */}
      <View style={styles.login}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#31A062", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    width: 340,
    height: 44,
    marginTop: 25,
    marginBottom: 105,
  },
  login: {
    marginTop: 20,
  },
});

export default SignUp;
