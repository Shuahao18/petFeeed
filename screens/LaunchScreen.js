import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from "react-native";

// Get screen width to ensure responsive design
const { width, height } = Dimensions.get("window");

const LaunchScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {/* Header Section */}
      <View style={styles.displayContainer}>
        <Image source={require("../assets/display.png")} style={styles.display} />
      </View>
    
      {/* Main Content Section */}
      <View style={styles.docsContainer}>
        <Text style={styles.heading}>BAKEBYTES PASTRY</Text>
        <Text style={styles.content}>Savor the Flavor, One Byte at a Time!</Text>
        <View style={styles.btnContainer}>
          <Text style={styles.header}>Start Shopping</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    // paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  displayContainer: {
    width: "100%",
    height: 210,// Adjust height as needed
    position: "relative", // Ensure child elements can fill the container
    // marginBottom: 20,
    // marginTop: 40
  },
  display: {
    ...StyleSheet.absoluteFillObject, // Covers the entire container
    width: "100%",
    height: "330%",
    resizeMode: "cover", // Ensures no distortion
  },
  docsContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1D26",
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center"
  },
  content: {
    color: "#4A4E4D",
    fontSize: 14,
    left: 73
  },
  btnContainer: {
    marginTop: 20,
    width: 208,
    height: 40,
    backgroundColor: "#54473F",
    borderRadius: 37,
    alignItems: "center",
    left: 60
  },
});

export default LaunchScreen;
