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
        <Text style={styles.highlight}></Text>Welcome to ByteBakers where</Text>
        <Text style={styles.paragraph}>technology meets the art of baking! We</Text>
        <Text style={styles.paragraph}>are a passionate team of bakers and</Text>
        <Text style={styles.paragraph}>tech enthusiasts, driven by our love for</Text>
        <Text style={styles.paragraph}>creating mouth-watering pastries and a</Text>
        <Text style={styles.paragraph}>seamless online experience. Our mission</Text>
        <Text style={styles.paragraph}>is to bring you freshly baked goods,</Text>
        <Text style={styles.paragraph}>made with the finest ingredients,</Text>
        <Text style={styles.paragraph}>delivered straight to your door with </Text>
        <Text style={styles.space}>Just a few clicks </Text>

        <Text style={styles.paragraph}>At ByteBakers, we believe that</Text>
        <Text style={styles.paragraph}>indulgence should be both delicious and</Text>
        <Text style={styles.paragraph}>convenient. Whether you're craving</Text>
        <Text style={styles.paragraph}>classic favorites or innovative new</Text>
        <Text style={styles.paragraph}>treats, we bake each pastry with care,</Text>
        <Text style={styles.paragraph}>ensuring that every bite is a blend of</Text>
        <Text style={styles.paragraph}>flavor and craftsmanship.</Text>
        <Text style={styles.paragraph}>Join us in our journey to fuse the</Text>
        <Text style={styles.paragraph}>warmth of a bakery with the efficiency</Text>
        <Text style={styles.paragraph}>of technology. Let ByteBakers satisfy</Text>
        <Text style={styles.paragraph}>your sweet cravings—one byte at a time!</Text>
      

     

    

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
    alignItems: "center", 
    backgroundColor: "#9a7e6f", // Main color
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
  space: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 2,
    lineHeight: 24,
    fontFamily: "LazyDog",
    marginBottom: 20
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
    marginBottom: 2,
    lineHeight: 24,
    fontFamily: "LazyDog"
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuContainer: {
    width: '45%',
    height: '70%',
    backgroundColor: '#54473F',
    borderRadius: 24,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  headContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  Text: {
    fontFamily: "LazyDog",
    fontSize: 14,
    color: '#FFFFFF'
  }
});

export default AboutScreen;
