// AboutScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {/* Header Box */}
      <View style={styles.headerContainer}>
        <View style={styles.contentBox}>
          {/* <Text style={styles.boxText}>Logo/Box</Text> */}
        </View>

        <Image source={require("../assets/pastry.jpg")} style={styles.pastry} />
      </View>

      <View style={styles.mainMenu}>
        <View style={styles.menuContainer}>
          <Text style={styles.Text}>GET TO KNOW US</Text>
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.Text}>SIGNING OUT</Text>
        </View>
      </View>

      {/* Main Content */}

      <View style={styles.headContainer}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.highlight}></Text>Welcome to ByteBakers where
        technology meets the art of baking! We are a passionate team of bakers
        and tech enthusiasts, driven by our love for creating mouth-watering
        pastries and a seamless online experience. Our mission is to bring you
        freshly baked goods, made with the finest ingredients, delivered
        straight to your door with just a few clicks.
      </Text>

      <Text style={styles.paragraph}>
      At ByteBakers, we believe that indulgence should be both delicious and convenient. Whether you're craving classic favorites or innovative new treats, we bake each pastry with care, ensuring that every bite is a blend of flavor and craftsmanship.
      Join us in our journey to fuse the warmth of a bakery with the efficiency of technology. Let ByteBakers satisfy your sweet cravings—one byte at a time!
      </Text>

      <Text style={styles.paragraph}>
        Let’s build something great, one component at a time!
      </Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexGrow: 1,
    // padding: 20,
    backgroundColor: "#9a7e6f", // Main color
  },
  headerContainer: {
    // position: "absolute",
    width: "100%",
    alignItems: "center", // Centers the box horizontally

    backgroundColor: "#D4C3C7",
  },
  contentBox: {
    width: "100%",
    height: "50%",
    position: "absolute",
    backgroundColor: "#54473F",

    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  boxText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
    lineHeight: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: "#ffd700", // Gold accent
  },

  pastry: {
    width: "90%",
    height: 192,
    justifyContent: "center",
    alignContent: "center",
    margin: 39,
    borderRadius: 15,
    // position: "absolute"
  },

  mainMenu: {
    width: "100%",
    height: "auto",
    backgroundColor: "#9A7E6F",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuContainer: {
    width: "50%",
    height: "40%",
    backgroundColor: "#54473F",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  headContainer: {
    width: "100%"
  }
});

export default AboutScreen;
