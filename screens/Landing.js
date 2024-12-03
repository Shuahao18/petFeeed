import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 60,
        backgroundColor: colors.bg,
      }}
    >
      <View style = {{position: 'absolute',width: '100%' ,justifyContent: 'center', alignItems: 'flex-end', top: 100}}>
      <Text style={{ fontFamily: 'SixtyFour',fontSize: 40, color: colors.text, }}>PAWFECT FEEDER</Text>
      <Text style={{ fontSize: 12,fontWeight: 900, color: colors.text, left: -100}}>
        Pet feeder for dog and cats only
      </Text>

    </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          top: 29,
        }}
      >
        <Image
          source={require("../assets/cat.png")}
          style={{
            width: 150,
            height: 100,
            marginLeft: 20,
          }}
        />

        <Image
          source={require("../assets/dog.png")}
          style={{
            width: 150,
            height: 100,
            marginRight: 20,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          width: "90%",
          height: 156,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 123,
          backgroundColor: colors.bg,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: colors.punkan
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.punkan,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            width: "90%",
            height: 80,
            paddingHorizontal: 10,
            
          }}
          onPress={() => navigation.navigate("login")}
        >
          <Image
            source={require("../assets/forward.png")}
            style={{
              width: 50,
              height: 50,
              right: 30,
            }}
          />
          <Text style={{ color: colors.bg, fontSize: 24, fontWeight: 900 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Landing;
