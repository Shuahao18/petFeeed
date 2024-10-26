import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Easing } from "react-native";
import React, { useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase"; // Import your Firebase configuration

const StartupScreen = () => {
  const navigation = useNavigation();
  const chevronAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate(""); // Navigate to the Start screen if the user is authenticated
  //     }
  //   });

  //   return unsubscribe; // Clean up subscription on unmount
  // }, [navigation]);

  const toggleLoginForm = () => {
        Animated.timing(chevronAnim, {
          toValue: -20, // Move chevron upwards
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate("Login"); // Navigate to the login screen after the animation
        });
                                };

  return (
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={styles.screenContainer}
        >
          <View style={styles.swipeContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logo}
            />

            <View style={styles.textContainer}>
              <Text style={styles.swipeText}>SWIPE UP TO</Text>
              <Text style={styles.swipeText}>LOGIN AND TO</Text>
              <Text style={styles.swipeText}>KNOW MORE</Text>
              <Text style={styles.swipeText}>ABOUT OUR</Text>
              <Text style={styles.swipeText}>CUTESY SHOP</Text>
            </View>



    <TouchableOpacity onPress={toggleLoginForm} style={styles.chevronButton}>
      <Image
        source={require("../assets/chevron.png")}
        style={{
          width: 30,
          height: 30,
          
        }}
      />
    </TouchableOpacity>
                  
         
         <View style={styles.extraContainer}>
               <Image 
                   source={require("../assets/Track.png")}
                   style={styles.start} 
                 />
               </View>
         </View>
  </ImageBackground>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    opacity: 1,
    marginBottom: 20, 
  },
  swipeContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between", 
    paddingVertical: 60,
    marginTop: 40
  },
  textContainer: {
    alignItems: "center", 
    marginTop: 70
  },
  swipeText: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "600",
    margin: 5,
    fontFamily: 'LazyDog',
  },
  chevronContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  chevronButton: {
    marginBottom: 10, 
  },
  extraContainer: {
    width: "100%",
    height: 69,
    alignItems: "center",
    justifyContent: "flex-start", 
    backgroundColor: "#9a7e6f",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "relative",
    paddingVertical: 28,
    paddingHorizontal: 28,
  },
});
