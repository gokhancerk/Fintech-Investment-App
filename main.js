import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, SafeAreaView } from "react-native";
import { registerRootComponent } from "expo";

import SafeViewAndroid from "./components/SafeViewAndroid";

import SignUp from "./screens/signUp";
import App from "./App";
import CreateAccount from "./screens/createAccount";
import Login from "./screens/login";

const Stack = createStackNavigator();

const Onboard = ({ navigation }) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SignUp navigation={navigation} />
    </SafeAreaView>
  );
};

// function TestScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Test Screen</Text>
//     </View>
//   );
// }

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sign Up" component={Onboard} />
        <Stack.Screen
          name="Account"
          component={CreateAccount}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

registerRootComponent(Main);
