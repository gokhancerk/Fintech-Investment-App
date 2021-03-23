import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import Font from "../hooks/font";

const CreateAccount = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View>
            <View style={styles.top}>
              <Font size={34} weight={"bold"}>
                Create an account
              </Font>
            </View>

            <View style={styles.subtext}>
              <Font size={17} color={"#4F4F4F"}>
                Invest and double your income now
              </Font>
            </View>

            <View>
              <Input
                holder={"Full name"}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.email}>
              <Input
                holder={"Email address"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
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
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Home")}
        >
          <CustomButton title={"Create account"} />
        </TouchableOpacity>

        <View style={{ marginTop: 46 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#31A062", fontWeight: "bold" }}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  top: {
    alignItems: "center",
    marginTop: 50,
  },
  subtext: {
    marginTop: 17,
    marginBottom: 92,
    alignItems: "center",
  },
  email: {
    marginTop: 18,
  },
  password: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default CreateAccount;
