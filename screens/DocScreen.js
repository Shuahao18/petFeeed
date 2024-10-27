import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const DocScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image source={require("../assets/mamon.png")} style={styles.mamon} />
      </View>

      {/* Main Content Section */}
      <View style={styles.docsContainer}>
                <Text style={styles.header}>GROUP 14 — The team is composed of six </Text>
                <Text style={styles.header}>dedicated members, each contributing their unique</Text>
                <Text style={styles.header}>skills and perspectives. Our primary goal for the</Text>
                <Text style={styles.header}>group's design is to embrace a minimalistic </Text>
                <Text style={styles.header}>aesthetic while incorporating a subtle touch of </Text>
                <Text style={styles.header}>cuteness to maintain an inviting and engaging </Text>
                <Text style={styles.header}>layout.</Text>
                <Text style={styles.header}>In terms of typography, we’ve chosen Nunito Sans</Text>
                <Text style={styles.header}>as our primary font. This choice aligns with our </Text>
                <Text style={styles.header}>vision for clarity and readability. The specific </Text>
                <Text style={styles.header}>typographic hierarchy we follow includes:</Text>
                <Text style={styles.header}>-Heading: 32 pt, ensuring it captures attention and</Text>
                <Text style={styles.header}>establishes a clear focal point.</Text>
                <Text style={styles.header}>-Subheading: 20 pt, providing a distinctive yet </Text>
                <Text style={styles.header}>harmonious distinction from the main headings.</Text>
                <Text style={styles.header}>-Body Text: two variations of 16 pt and 14 pt, </Text>
                <Text style={styles.header}>allowing for flexibility in content presentation </Text>
                <Text style={styles.header}>while ensuring comfortable readability for the </Text>
                <Text style={styles.header}>audience.</Text>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  headerContainer: {
    width: "130%",
    alignItems: "center",
    marginBottom: 20,
  },
  mamon: {
    width: "120%",
    height: 360, // Adjusted height for a better fit
    resizeMode: "cover", // Ensures the image covers the space without distortion
    borderRadius: 15,
  },
  docsContainer: {
    width: "102%",
    marginLeft: 20,
    marginTop: 20
    // padding: 20,
    // backgroundColor: "#fff",
    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,

  },
  header: {
    fontSize: 16,
    lineHeight: 15,
    color: "#333",
    marginBottom: 15,
  },
  bulletContainer: {
    marginTop: 10,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default DocScreen;
