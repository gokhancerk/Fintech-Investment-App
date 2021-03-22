import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, SafeAreaView } from "react-native";
import { registerRootComponent } from "expo";

import SafeViewAndroid from "./components/SafeViewAndroid";

import SignUp from "./screens/signUp";
import App from "./App";

const Stack = createStackNavigator();

const Onboard = ({ navigation }) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SignUp navigation={navigation} />
    </SafeAreaView>
  );
};

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sign Up" component={Onboard} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

registerRootComponent(Main);
