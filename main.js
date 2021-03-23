import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

import HomeDrawer from "./components/Drawers/Home";

import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TestScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Test Screen</Text>
    </View>
  );
}

export default function App({ navigation }) {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#31A063",
        }}
        screenOptions={{}}
      >
        <Tab.Screen
          name="Home"
          component={HomeDrawer}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="home-filled" size={24} color="#31A063" />
              ) : (
                <MaterialIcons name="home" size={24} color="#D3D2D2" />
              ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={TestScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="search" size={24} color="#31A063" />
              ) : (
                <MaterialIcons name="search" size={24} color="#D3D2D2" />
              ),
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={TestScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="exchange" size={24} color="#31A063" />
              ) : (
                <FontAwesome name="exchange" size={24} color="#D3D2D2" />
              ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={TestScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="#31A063"
                />
              ) : (
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color="#D3D2D2"
                />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
