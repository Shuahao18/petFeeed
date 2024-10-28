import React from "react";
import {View, StyleSheet, Image, ScrollView, TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SecScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.flyerContainer}>
        {/* Heading Image with Button on Top-Left */}
        <TouchableOpacity
          style={styles.btnTouchable}
          onPress={() => {
            console.log("secondBtn click");
            navigation.navigate("Info");
          }}
        >
          <Image
            source={require("../assets/go.png")}
            style={styles.forward}
          />
        </TouchableOpacity>

        {/* Profile Images */}
        <Image source={require("../assets/elton.png")} style={styles.profile} />
        <Image source={require("../assets/ella.png")} style={styles.profile} />
        <Image source={require("../assets/nenia.png")} style={styles.profile} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#54473F",
    alignItems: "center",
    paddingVertical: 20,
    paddingTop: 40,
  },
  flyerContainer: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#1D2023",
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  profile: {
    width: "90%",
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    resizeMode: "cover",
    marginTop: 50,
  },
  btnTouchable: {
    position: "absolute",
    top: -10, 
    right: -1, 
    padding: 10, 
    zIndex: 10, 
  },
  forward: {
    width: 56,
    height: 54,
    resizeMode: "contain",
  },
});

export default SecScreen;
