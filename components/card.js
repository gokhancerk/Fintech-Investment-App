import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollToOverflowEnabled={true}
      >
        <View style={styles.card_container}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image source={require("../assets/currencies/dolar.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/euro.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/bitcoin.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/dolar.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/euro.png")} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 5 }}>
            <Image source={require("../assets/currencies/bitcoin.png")} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 0,
    marginBottom: 0,
    // width: 200,
    height: 210,
  },
  card_container: {
    // width: 134,
    // height: 170,
    // borderRadius: 10,
    flexDirection: "row",
  },
  card: {
    // paddingLeft: 9,
    flexDirection: "row",
  },
});

export default Card;
