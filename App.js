import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeDrawer from "./components/Drawers/Home";
import Test from "./components/Test";

import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      {/* <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeDrawer} />
          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              title: "Awesome app",
            }}
          />
        </Stack.Navigator> */}
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#31A063",
        }}
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
          component={Test}
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
          component={Test}
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
          component={Test}
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

const styles = StyleSheet.create({});
