import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <>
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              source={require("../assets/login.png")}
              width={100}
              height={100}
            />
          </View>
          <View>
            <Input
              holder={"User Name"}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.password}>
            <Input
              holder={"Password"}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.login}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Home")}
            >
              <CustomButton title={"Login"} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 90,
  },
  password: {
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    alignItems: "center",
    marginBottom: 40,
  },
  login: {
    marginBottom: 30,
  },
});

export default Login;
