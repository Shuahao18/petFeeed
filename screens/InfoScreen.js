import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const InfoScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {/* Header Section */}
      <View style={styles.displayContainer}>
        <Image source={require("../assets/display.png")} style={styles.display} />
      </View>

      {/* Forward Button with Improved Clickability */}
      <TouchableOpacity
        style={styles.forwardContainer} 
        onPress={() => {
          console.log("infoBtn click");
          navigation.navigate("Launch");
        }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
      >
        <Image source={require("../assets/forward.png")} style={styles.forward} />
      </TouchableOpacity>

      {/* Main Content Section */}
      <View style={styles.docsContainer}>
        <Text style={styles.heading}>BAKEBYTES PASTRY</Text>
        <Text style={styles.content}>Savor the Flavor, One Byte at a Time!</Text>

        {/* Shopping Button */}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            console.log("Navigating to Shop");
            navigation.navigate("Shop");
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
        >
          <Text style={styles.header}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },
  displayContainer: {
    width: "100%",
    height: 210,
    position: "relative",
  },
  display: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "330%",
    resizeMode: "cover",
  },
  docsContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1D26",
    marginBottom: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  content: {
    color: "#4A4E4D",
    fontSize: 14,
    left: 73,
  },
  btnContainer: {
    marginTop: 20,
    width: 208,
    height: 50, 
    backgroundColor: "#54473F",
    borderRadius: 37,
    alignItems: "center",
    justifyContent: "center",
    left: 60,
  },
  forwardContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  forward: {
    width: 58,
    height: 54,
    resizeMode: "contain",
  },
});

export default InfoScreen;
