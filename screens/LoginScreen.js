
import {ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, Easing, Image,} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

  const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;

        const WelcomeSection = () => (
          <View style={styles.welcomeContainer}>
            {showWelcome && (
              <>
                <Text style={styles.header}>WELCOME! ENJOY</Text>
                <Text style={styles.header}>EXPLORING OUR</Text>
                <Text style={styles.header}>BYTEBAKES</Text>
                <Text style={styles.header}>PASTRY SHOP</Text>
              </>
            )}
          </View>
        );
      
        const LoginForm = () => (
          <Animated.View
            style={[
              styles.loginContainer,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
              <View style={styles.inputContainer}>
                <Image source={require("../assets/Track.png")} style={styles.start} />
                <Text style={styles.inputHeader}>ENTER YOUR ACCOUNT</Text>
              </View>
          
              <Text style={styles.emailLabel}>Username</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
              />
              <Text style={styles.passLabel}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={require("../assets/eye.jpg")}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.inputForgot}>Forgot the password?</Text>
          
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={loginHandler} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.inputAcc}>Don’t have an account?</Text>
                <Text style={styles.SignAcc}>Sign Up</Text>

              </View>
            </KeyboardAvoidingView>
          </Animated.View>
        );

        useEffect(() => {
          setShowWelcome(true);
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }).start();
        }, []);

        const loginHandler = () => {
          navigation.navigate("Shop");
        };
      
        return (
          <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.screenContainer}
            
          >
          <Image source={require("../assets/transparent.png")} style={styles.parent} />

            <WelcomeSection />
            <TouchableOpacity
              style={styles.chevronContainer}
              onPress={() => {
                console.log("Chevron pressed! Navigating to Start...");
                navigation.navigate("Start");
              }}
            >
              <Image
                source={require("../assets/chevron.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <LoginForm />
          </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  welcomeContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    fontSize: 40,
    fontWeight: "900",
    fontFamily: "",
    marginVertical: 5,
    textAlign: "left",
    color: "#FFFFFF",
  },
  loginContainer: {
    backgroundColor: "#9A7E6F",
    width: "112%",
    height: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  chevronContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "3%",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  parent: {
    position: "absolute"
  },
  start: {
    width: 76,
    height: 13,
    marginBottom: 10,
  },
  inputHeader: {
    fontSize: 20,
    color: "#FFFFFF",
    marginVertical: 8,
    fontWeight: "500",
    fontFamily: "Nunito",
    fontWeight: "900",
    marginBottom: 35,
  },
  input: {
    height: 44,
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    color: "#333",
    borderColor: "#BDBDBD",
  },
  emailLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 5,
    fontWeight: "500",
    fontFamily: "Nunito",
    fontWeight: "900",
  },
  passLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 5,
    fontWeight: "500",
    fontFamily: "Nunito",
    fontWeight: "900",  
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: -30,
  },
  inputForgot: {
    fontSize: 12,
    alignSelf: "flex-end",
    margin: 5,
    fontFamily: "Nunito",
    fontWeight: "500",
    color: "#FFFFFF"
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#54473F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#FFFFFF"
  },
  inputAcc: {
    fontSize: 14,
    margin: 10,
    fontWeight: "500",
    fontFamily: "Nunito",
    color: "#FFFFFF",
    left: -30
  },
  SignAcc: {
    fontSize: 14,
    margin: 10,
    fontWeight: "500",
    fontFamily: "Nunito",
    fontWeight: "900",
    position: "absolute",
    top: 58,
    right: 75
,
    color: "#FFFFFF"
  },
  
});
