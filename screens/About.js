import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from "react-native";
import React, {useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import { toggleVisibility, toggleVisibilityRight } from "../components/animation"; 

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleRight, setIsVisibleRight] = useState(true);

  const translateAnim = useRef(new Animated.Value(-300)).current;
  const translateAnimRight = useRef(new Animated.Value(300)).current;

  const navigation = useNavigation();
  const bounceAnim = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    // Start the bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10, // Move up by 10 units
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0, // Return to original position
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceAnim]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20, 
      }}
      style={{ backgroundColor: colors.bg }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 60,
          backgroundColor: colors.bg,
        }}
      >
        {/* Header Section */}
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
          {/* Bouncing pawpaw image */}
      <Animated.Image
        source={require("../assets/pawpaw.png")}
        style={{
          alignSelf: "flex-end",
          marginRight: 20,
          transform: [{ translateY: bounceAnim }], // Apply bounce animation
        }}
      />
          <Text style={{ fontSize: 65, color: colors.text, top: -80 }}>About</Text>
        </View>

        {/* Description Section */}
        <View style={{ width: "95%", height: 209, marginBottom: 30, alignItems: "center",backgroundColor: colors.bg,borderRadius: 12, borderWidth: 2, borderColor: colors.punkan
  }}>
        {/* <Text style={styles.title}>About Us</Text> */}
        <Text style={{ fontSize: 12 }}><Text style={{  }}></Text>At Pawfect Feeder, we are passionate about enhancing the well-</Text>
        <Text style={{ fontSize: 12 }}>being of your beloved pets, ensuring they receive the utmost care </Text>
        <Text style={{ fontSize: 12 }}>even in your absence. Our innovative smart feeding system is </Text>
        <Text style={{ fontSize: 12 }}>thoughtfully designed to provide a seamless and reliable way to keep</Text>
        <Text style={{ fontSize: 12 }}>your furry friends nourished and content. </Text>
        <Text style={{ fontSize: 12}}>With user-friendly features and a focus on both convenience and </Text>
        
        <Text style={{ fontSize: 12}}>affection, Pawfect Feeder stands as your trusted partner in creating a</Text>
        <Text style={{ fontSize: 12}}>delivered straight to your door with Just a</Text>
        <Text style={{ fontSize: 12}}>balanced and fulfilling life for your pets. </Text>

        <Text style={{ fontSize: 12}}>Pawfect Feeder offers an innovative, dependable, and user-friendly </Text>
        <Text style={{ fontSize: 12 }}>feeding solution designed to keep your pets nourished and content, </Text>
        <Text style={{ fontSize: 12 }}>even in your absence. Our goal is to ensure that your furry </Text>
        <Text style={{ fontSize: 12 }}>companions receive their meals on time and maintain their well-</Text>
        <Text style={{ fontSize: 12 }}>being, giving you peace of mind while you're away.</Text>
       

      </View>

        {/* Team Section */}
        <View
          style={{
            flex: 1,
            flexDirection: 'col',
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: 10,
            height: 1300,
            borderWidth: 1
          }}
        >
          {/* {Domgy} */}
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
              onPress={() => toggleVisibility(translateAnim, isVisible, setIsVisible)} 
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
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
              <Text style={{ color: colors.punkan, fontSize: 16,fontWeight: 900, right: -50 }}>
                Domgy Anne Espiritu
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 50 }}>
                Project Manager
              </Text>
            </Animated.View>
          </View>
                        {/* {Jess} */}

             <View style ={{ paddingTop: 40 }}  >
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
                top: 10,
                right: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={() => toggleVisibilityRight(translateAnimRight, isVisibleRight, setIsVisibleRight)} 
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
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
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight: 900, right: 50 }}>
                Jess Carlos Cabalida
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: -50 }}>
                Database Administrator
              </Text>
            </Animated.View>
          </View>

           {/* {Richmon} */}

           <View style ={{ paddingVertical: 40 }}  >
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
              onPress={() => toggleVisibility(translateAnim, isVisible, setIsVisible)} 
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
                height: 103,
                paddingHorizontal: 10,
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                top: 10,
                right: -10,
                transform: [{ translateX: translateAnim }],
                zIndex: 1,
              }}
            >
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight: 900, right: -36 }}>
                Richmon Golane
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
                Back End Developer
              </Text>
            </Animated.View>
          </View>

               {/* {Lenard} */}
               <View style ={{ paddingVertical: 40 }}  >
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
                top: 8,
                right: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={() => toggleVisibilityRight(translateAnimRight, isVisibleRight, setIsVisibleRight)} // Use the imported animation function
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
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
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight: 900, right: 40 }}>
                Lenard Handig
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: -40 }}>
                UI/UX Design
              </Text>
            </Animated.View>
          </View>


             {/* {Janella } */}

             <View style ={{ paddingVertical: 40 }}  >
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
                top: -10,
                left: -8,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={() => toggleVisibility(translateAnim, isVisible, setIsVisible)} // Use the imported animation function
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
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
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight: 900, left: 40 }}>
                Janella Herrera
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
                Release Manager
              </Text>
            </Animated.View>
          </View>


               {/* {Joshua} */}
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
                bottom: -10,
                right: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={() => toggleVisibilityRight(translateAnimRight, isVisibleRight, setIsVisibleRight)} 
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
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
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight:900, right: 40 }}>
                Joshua Meredores
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: -40 }}>
                Database Admin
              </Text>
            </Animated.View>
          </View>

          
             {/* {Ella } */}

             <View style ={{ paddingVertical: 40 }}  >
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
              onPress={() => toggleVisibility(translateAnim, isVisible, setIsVisible)} // Use the imported animation function
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
                height: 103,
                paddingHorizontal: 10,
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                bottom: -1,
                right: -10,
                transform: [{ translateX: translateAnim }],
                zIndex: 1,
              }}
            >
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight: 900, left: 40 }}>
                Ella Mae Tebelin
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
                Assurance Specialist
              </Text>
            </Animated.View>
          </View>


               {/* {Nenia} */}
               <View style ={{ paddingTop: 40 }}  >
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
                top: 10,
                right: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={() => toggleVisibilityRight(translateAnimRight, isVisibleRight, setIsVisibleRight)} // Use the imported animation function
            >
              <Image
                source={require("../assets/kris.png")}
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
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
                width: 320,
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
              <Text style={{ color: colors.punkan, fontSize: 16, fontWeight: 900, left: 40 }}>
                Nenia Valenzuela
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
                User Insight Specialist
              </Text>
            </Animated.View>
          </View>




          {/* Similar sections for Jess, Richmon, and Janella */}
        </View>
      </View>

      {/* Footer Section with Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          width: "100%",
          height: 100,
        }}
      >
        <Image
          source={require("../assets/aboutBtn.png")}
          style={{
            width: 60,
            height: 40,
          }}
        />

        <Image
          source={require("../assets/homebtn.png")}
          style={{
            width: 40,
            height: 40,
          }}
        />

        <Image
          source={require("../assets/Logout.png")}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default About;
