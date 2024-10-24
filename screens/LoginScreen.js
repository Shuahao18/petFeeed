import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Easing,
} from "react-native";

import React, { useEffect, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons"; // Chevron Icon

const WelcomeSection = ({ showWelcome }) => {
  return (
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
};

const SwipeSection = ({ isVisible }) => {
  return (
    !isVisible && (
      <View style={styles.swipeContainer}>
        <Text style={styles.swipeText}>SWIPE UP TO</Text>
        <Text style={styles.swipeText}>LOGIN AND TO</Text>
        <Text style={styles.swipeText}>KNOW MORE</Text>
        <Text style={styles.swipeText}>ABOUT OUR</Text>
        <Text style={styles.swipeText}>CUTESY SHOP</Text>
      </View>
    )
  );
};

const ChevronButton = ({ toggleLoginForm, isVisible, chevronAnim }) => {
  return (
    <Animated.View
      style={[
        styles.chevronContainer,
        {
          position: "absolute",
          bottom: 20,
          transform: [{ translateY: chevronAnim }],
        },
      ]}
    >
      <TouchableOpacity onPress={toggleLoginForm} style={styles.chevronButton}>
        <AntDesign name={isVisible ? "down" : "up"} size={30} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const LoginForm = ({
  slideAnim,
  email,
  setEmail,
  password,
  setPassword,
  loginHandler,
}) => {
  return (
    <Animated.View
      style={[
        styles.loginContainer,
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>Enter your account</Text>
          <Text style={styles.emailLabel}>EMAIL</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.passLabel}>PASSWORD</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            source={require("../assets/eye.jpg")}
            style={styles.input}
            secureTextEntry
          />
          <Text style={styles.inputForgot}>Forgot the password?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={loginHandler} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.inputAcc}>Don’t have an account? Sign Up. </Text>
        </View>
      </KeyboardAvoidingView>
    </Animated.View>
  );
};

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const [showWelcome, setShowWelcome] = useState(false); // Track welcome text visibility
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(800)).current; // Start off-screen at the bottom
  const chevronAnim = useRef(new Animated.Value(0)).current; // Chevron starting position

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Beacon");
      }
    });

  }, []);

  // const registerHandler = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log("Registered Successfully:", user.email);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Login Successfully:", user.email);
        navigation.navigate("Dashboard");
      })
      .catch((error) => alert(error.message));
  };

  const toggleLoginForm = () => {
    const toValue = isVisible ? 800 : 0;
    const chevronToValue = isVisible ? 0 : -20; // Subtle movement
  
    if (!isVisible) {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }
  
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true, // Better performance
      }),
      Animated.timing(chevronAnim, {
        toValue: chevronToValue,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true, // Better performance
      }),
    ]).start(() => setIsVisible(!isVisible));
  };
  

  return (
    <ImageBackground
      source={require("../assets/background.jpg")} // Update the path to your image
      style={styles.screenContainer} // Use the same styles for the container
    >
      {/* Only show the logo when the welcome text is not visible */}
      {!showWelcome && (
        <Image
          source={require("../assets/logo.png")} // Add your logo here
          style={styles.logo}
        />
      )}

      <WelcomeSection showWelcome={showWelcome} />

      <SwipeSection isVisible={isVisible} />

      <ChevronButton
        toggleLoginForm={toggleLoginForm}
        isVisible={isVisible}
        chevronAnim={chevronAnim}
      />

      <LoginForm
        slideAnim={slideAnim}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginHandler={loginHandler}
      />
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  welcomeContainer: {
    marginTop: "10%", // 10 pixels on top
    marginRight: "20%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20, 
  },
  header: {
    font: "lazydog",
    width: 280,
    gap: 5,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5, 
    textAlign: "left",
    color: "#111213", 
    textShadowColor: "rgba(0, 0, 0, 0.5)", 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    opacity: 100,
    margin: 10,
  },
  swipeContainer: {
    color: "#111213",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "90%",
    // Space between header and swipe text
  },
  swipeText: {
    color: "#111213",
    fontSize: 18,
    fontWeight: "600",
    margin: 5,
  },
  chevronContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  chevronButton: {
    marginTop: 5,
  },
  loginContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#9A7E6F", // White box background
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  inputHeader: {
    fontSize: 20,
    fontFamily: "LazyDog",
    color: "fff",
    margin: "10%",
    // marginRight: "70%"
  },
  inputContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    color: "#D9D9D9",
  },
  input: {
    height: 44,
    width: 356,
    padding: 10,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F5F5F5", // Light gray background
    color: "#333", // Dark color for input text
    borderColor: "#BDBDBD", // Border color
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#54473F", // Dark grey button color
    margin: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
    width: 359,
    height: 55,
    // margintop: "50%"
  },
  buttonText: {
    fontWeight: "bold",
    justifyContent: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    // marginBottom: "30%",
    borderColor: "#616D66", // Grey border color
    borderWidth: 2,
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutlineText: {
    color: "#616D66",
    fontWeight: "bold",
  },
  logo: {
    width: 250,
    height: 250,
    opacity: 1,
    position: "absolute",
    top: 130,
    alignSelf: "center", // Centers horizontally
  },
  
  emailLabel: {
    fontSize: 16,
    fontFamily: "LazyDog", // Apply LazyDog font
    color: "#000000",
    flex: "start",
    marginRight: "79%",
  },
  passLabel: {
    fontSize: 16,
    fontFamily: "LazyDog", // Apply LazyDog font
    color: "#000000",
    flex: "start",
    marginRight: "70%",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#ccc",
    backgroundColor: "#F5F5F5",
    marginVertical: 10,
    position: "relative", // Allows absolute positioning of the icon
  },
  passwordInput: {
    flex: 1, // Fills available space
    height: 44,
    padding: 10,
    paddingRight: 40, // Add padding to the right to avoid text overlap with the icon
    color: "#333",
  },
  eyeIcon: {
    position: "absolute",
    right: 10, // Positioning to the right
    top: 12, // Center it vertically within the input
  },
  eyeImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
