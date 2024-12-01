import {
  ImageBackground,
  ScrollView,
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
import animation from "../components/animation";

const About = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleRight, setIsVisibleRight] = useState(true);

  const translateAnim = useRef(new Animated.Value(-300)).current;
  const translateAnimRight = useRef(new Animated.Value(300)).current;

  const navigation = useNavigation();

  const toggleVisibility = () => {
    Animated.timing(translateAnim, {
      toValue: isVisible ? 0 : -350,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();

    setIsVisible(!isVisible);
  };

  const toggleVisibilityRight = () => {
    Animated.timing(translateAnimRight, {
      toValue: isVisibleRight ? 0 : 300,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
    setIsVisibleRight(!isVisibleRight);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: colors.bg }}
    >
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
        <View
          style={{
            flexDirection: "col",
            alignItems: "center",
            gap: 10,
            borderWidth: 2,
            width: "100%",
            height: 100,
          }}
        >
          <Image
            source={require("../assets/pawpaw.png")}
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
              top: 10,
            }}
          ></Image>
          <Text style={{ fontSize: 65, color: colors.text, top: -80 }}>
            About{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "col",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.punkan,
            borderRadius: 12,
            width: "90%",
            height: 200,
          }}
        >
          <Text style={{ fontSize: 10, color: colors.text }}>
            At Pawfect Feeder, we are passionate about enhancing the well-being
            of your beloved pets, ensuring they receive the utmost care even in
            your absence. Our innovative smart feeding system is thoughtfully
            designed to provide a seamless and reliable way to keep your furry
            friends nourished and content. With user-friendly features and a
            focus on both convenience and affection, Pawfect Feeder stands as your
            trusted partner in creating a balanced and fulfilling life for your
            pets.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "col",
            width: 350,
            height: 300,
            padding: 12,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 1,
            backgroundColor: colors.bg,
            borderRadius: 10,
            borderWidth: 1,
            top: 360,
            zIndex: 2,
            borderWidth: 2,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.punkan,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                width: 150,
                height: 150,
                paddingHorizontal: 10,
                bottom: 10,
                left: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={toggleVisibility}
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  resizeMode: "fit",
                  borderRadius: 110,
                }}
              />
            </TouchableOpacity>

            <Animated.View
              style={{
                backgroundColor: colors.bg,
                flexDirection: "col",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                width: 300,
                height: 103,
                paddingHorizontal: 10,
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                top: -30,
                right: -10,
                transform: [{ translateX: translateAnim }],
                zIndex: 1,
              }}
            >
              <Text style={{ color: colors.punkan, fontSize: 16, left: 40 }}>
                Domgy Anne Espiritu
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
                Project Manager
              </Text>
            </Animated.View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.punkan,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                width: 150,
                height: 150,
                paddingHorizontal: 10,
                top: -30,
                right: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={toggleVisibilityRight}
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  resizeMode: "fit",
                  borderRadius: 110,
                }}
              />
            </TouchableOpacity>

            <Animated.View
              style={{
                backgroundColor: colors.bg,
                flexDirection: "col",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                width: 300,
                height: 103,
                paddingHorizontal: 10,
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                bottom: 10,
                left: -10,
                transform: [{ translateX: translateAnimRight }],
                zIndex: 1,
              }}
            >
              <Text style={{ color: colors.punkan, fontSize: 16, left: 40 }}>
                Jess Carlos Cabalida
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
                Database Admin
              </Text>
            </Animated.View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            position: "absolute",
            borderWidth: 2,
            width: "100%",
            height: 100,
            bottom: -20,
          }}
        >
          <Image
            source={require("../assets/aboutBtn.png")}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              top: 20,
              width: 60,
              height: 40,
            }}
          />

          <Image
            source={require("../assets/homebtn.png")}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              top: 20,
              width: 40,
              height: 40,
            }}
          />

          <Image
            source={require("../assets/Logout.png")}
            style={{
              alignSelf: "center",
              justifySelf: "center",
              top: 20,
              width: 40,
              height: 40,
            }}
            placeholder="Logout"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
