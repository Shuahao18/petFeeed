import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LaunchScreen = () => {
const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.containerMain}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header Section */}
      <View style={styles.displayContainer}>
        <Image
          source={require("../assets/launching.png")}
          style={styles.launching}
        />
        <Text style={styles.heading}>BAKING SOON</Text>
        <Text style={styles.content}>
          Goodies will be available soon.{"\n"}Make sure you don't miss out.
        </Text>

        {/* Home Button */}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            console.log("Navigating home");
            navigation.navigate("Home");
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
        >
          <Text style={styles.header}>Home</Text>
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
  launching: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "368%",
    resizeMode: "cover",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 65,
    fontWeight: "bold",
    color: "#FFFFFF",
    top: 266,
    right: 43,
    textAlign: "right",
  },
  content: {
    color: "#FFFFFF",
    fontSize: 14,
    left: 23,
    top: 588,
    position: "absolute",
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  btnContainer: {
    marginTop: 30,
    position: "absolute", 
    width: 208,
    height: 40,
    backgroundColor: "#54473F",
    borderRadius: 37,
    alignItems: "center",
    justifyContent: "center",
    left: 70,
    bottom: -540, 
  },
});

export default LaunchScreen;
