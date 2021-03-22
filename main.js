import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import { registerRootComponent } from "expo";
import SafeViewAndroid from "./components/SafeViewAndroid";

import SignUp from "./screens/signUp";

const Onboard = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
        <SignUp />
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

registerRootComponent(Onboard);
