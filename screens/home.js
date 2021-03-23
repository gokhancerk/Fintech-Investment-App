import React from "react";
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Font from "../hooks/font";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../components/card";

const Home = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.icons}>
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            onPress={() => props.navigation.toggleDrawer()}
          />
          <Ionicons name="md-notifications-outline" size={24} color="black" />
        </View>

        <View style={{ marginTop: 32 }}>
          <Font size={34}>Welcome, Jessie.</Font>
        </View>

        <View style={styles.portfolio_container}>
          <View style={styles.portfolio}>
            <View style={styles.portfolio_header}>
              <Font size={16} color={"#fff"} weight={"bold"}>
                Your total asset portfolio.
              </Font>
            </View>

            <View style={styles.portfolio_content}>
              <Font size={32} color={"#fff"} weight={"bold"}>
                N203,935
              </Font>

              <View style={styles.invest}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Font size={14} color="#31A078" spacing={1} weight={"bold"}>
                    Invest now
                  </Font>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.plans_container}>
          <Font size={22} weight={"bold"}>
            Best Plans
          </Font>

          <TouchableOpacity>
            <View style={styles.see_all}>
              <Font color="#FE555D" size={18}>
                See All
              </Font>

              <View style={{ paddingLeft: 7 }}>
                <AntDesign name="arrowright" size={24} color="#FE555D" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Card />

        <View style={styles.guide_container}>
          <Font size={22} weight={"bold"}>
            Investment Guide
          </Font>

          <View style={styles.guide}>
            <View>
              <View style={styles.guide_header}>
                <Font size={18} weight={"bold"} color={"#4F4F4F"} spacing={1}>
                  Basic type of investments
                </Font>
              </View>

              <View style={styles.guide_description}>
                <Font size={14} color={"#4F4F4F"} spacing={1}>
                  This is how you set your foot for 2020 Stock market
                  recession.What’s next...
                </Font>
              </View>
            </View>

            <View style={styles.guide_ellipse}>
              <Image source={require("../assets/ellipse.png")} />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#4A4A4A",
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.guide}>
            <View>
              <View style={styles.guide_header}>
                <Font size={18} weight={"bold"} color={"#4F4F4F"} spacing={1}>
                  How much can you start with...
                </Font>
              </View>

              <View style={styles.guide_description}>
                <Font size={14} color={"#4F4F4F"} spacing={1}>
                  What do you like to see? It’s a very different market from
                  2018. The way...
                </Font>
              </View>
            </View>

            <View style={styles.guide_ellipse}>
              <Image source={require("../assets/ellipse2.png")} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  icons: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  portfolio_container: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  portfolio: {
    width: 354,
    height: 146,
    borderRadius: 20,
    backgroundColor: "#258B66",
    marginTop: 40,
  },
  portfolio_header: {
    paddingTop: 33,
    paddingBottom: 22,
    paddingLeft: 12,
  },
  portfolio_content: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  invest: {
    backgroundColor: "#fff",
    width: 125,
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  plans_container: {
    marginTop: 47,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  guide_container: {
    marginTop: 20,
  },
  guide: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  guide_header: {
    paddingBottom: 10,
    width: 271,
  },
  guide_description: {
    paddingBottom: 19,
    width: 281,
  },
  guide_ellipse: {
    alignItems: "center",
    flexDirection: "row",
  },
  see_all: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
