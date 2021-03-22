import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, SafeAreaView } from "react-native";
import { registerRootComponent } from "expo";

import SafeViewAndroid from "./components/SafeViewAndroid";

import SignUp from "./screens/signUp";

const Stack = createStackNavigator();

const Onboard = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SignUp />
    </SafeAreaView>
  );
};

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboard" component={Onboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

registerRootComponent(Main);
