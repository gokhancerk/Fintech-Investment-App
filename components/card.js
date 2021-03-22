import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
//import { LinearGradient } from "expo-linear-gradient";
//import Font from "../hooks/font";

const Card = (props) => {
  return (
    // <LinearGradient
    //   colors={["rgba(240,198,53,1)", "rgba(216,143,56,1)"]}
    //   style={styles.card}
    // >
    //   <View>
    //     <Font>A</Font>
    //   </View>
    // </LinearGradient>
    <>
      <View style={styles.card_container}>
        <TouchableOpacity activeOpacity={0.6}>
          <View>
            <Image source={require("../assets/currencies/dolar.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.card}>
            <Image source={require("../assets/currencies/euro.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.card}>
            <Image source={require("../assets/currencies/bitcoin.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card_container: {
    // width: 134,
    // height: 170,
    // borderRadius: 10,
    flexDirection: "row",
  },
  card: {
    paddingLeft: 9,
  },
});

export default Card;
