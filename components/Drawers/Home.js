import React from "react";
import { View, StyleSheet, Button, Text, SafeAreaView } from "react-native";
import SafeViewAndroid from "../../components/SafeViewAndroid";

import Home from "../../screens/home";

import "react-native-gesture-handler";

import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import Font from "../../hooks/font";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Home navigation={navigation} />

        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Test")}
        />
        <Button title="Icon" onPress={() => navigation.toggleDrawer()} /> */}
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: "center" }}>
        <Font size={22}>My Asset</Font>
      </View>
      <DrawerItem
        label="Asset"
        onPress={() => props.navigation.toggleDrawer()}
        option={{ headerShown: true }}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
        inactiveTintColor="red"
        inactiveBackgroundColor="#eee"
        activeBackgroundColor="#992"
      />
      <Button
        title="Go somewhere"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          props.navigation.navigate("Test");
        }}
      />
    </DrawerContentScrollView>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Awesome App!!",
        headerShown: false,
        gestureEnabled: true,
        headerTitle: "Test",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "#fff",
        width: 300,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F9",
  },
});

export default HomeDrawer;
