import { ScrollView, Text, TouchableOpacity, View, Animated, Image,
} from "react-native";
import React, {useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native"; 
import colors from "../constants/colors";
import { toggleVisibility, toggleVisibilityRight } from "../components/animation"; 

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleRight, setIsVisibleRight] = useState(true);

  const translateAnim = useRef(new Animated.Value(-300)).current;
  const translateAnimRight = useRef(new Animated.Value(500)).current;

  const navigation = useNavigation(); 
  const bounceAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
      Animated.sequence([
        Animated.timing(translateAnim, {
          toValue: 0, 
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateAnimRight, {
          toValue: 0, 
          duration: 3000,
          useNativeDriver: true,
        }),
      ]).start(); 
    }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10, 
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
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
            width: "100%",
            height: 100,
          }}
        >
          <TouchableOpacity>
            <Animated.Image
              source={require("../assets/pawpaw.png")}
              style={{
                right: -115,
                transform: [{ translateY: bounceAnim }],
              }}
              onPress={() => navigation.navigate('home')}
              />
          </TouchableOpacity>
          <Text style={{ fontSize: 65, fontWeight: 900, color: colors.text, top: -80 }}>About</Text>
        </View>

        {/* Description Section */}
        <View style={{ width: "95%", height: 300, marginBottom: 30, justifyContent: 'center', alignItems: "center",backgroundColor: colors.bg,borderRadius: 12, borderWidth: 2, borderColor: colors.punkan
  }}>
        <Text style={{ fontSize: 12 }}><Text style={{  }}></Text>At Pawfect Feeder, we are passionate about enhancing the well-</Text>
        <Text style={{ fontSize: 12 }}>being of your beloved pets, ensuring they receive the utmost care </Text>
        <Text style={{ fontSize: 12 }}>even in your absence. Our innovative smart feeding system is </Text>
        <Text style={{ fontSize: 12 }}>thoughtfully designed to provide a seamless and reliable way to keep</Text>
        <Text style={{ fontSize: 12 }}>your furry friends nourished and content.{'\n'}</Text>

        <Text style={{ fontSize: 12}}>With user-friendly features and a focus on both convenience and </Text>
        
        <Text style={{ fontSize: 12}}>affection, Pawfect Feeder stands as your trusted partner in creating a</Text>
        <Text style={{ fontSize: 12}}>delivered straight to your door with Just a</Text>
        <Text style={{ fontSize: 12}}>balanced and fulfilling life for your pets. {'\n'} </Text>

        <Text style={{ fontSize: 12}}>Pawfect Feeder offers an innovative, dependable, and user-friendly </Text>
        <Text style={{ fontSize: 12 }}>feeding solution designed to keep your pets nourished and content, </Text>
        <Text style={{ fontSize: 12 }}>even in your absence. Our goal is to ensure that your furry </Text>
        <Text style={{ fontSize: 12 }}>companions receive their meals on time and maintain their well-</Text>
        <Text style={{ fontSize: 12 }}>being, giving you peace of mind while you're away.</Text>
       

      </View>

        {/* Team Section */}
        <View
          style={{flex: 1, flexDirection: 'col', alignItems: "center", justifyContent: "center", width: "100%", marginBottom: 10, height: 1400,
          }}
        >
          {/* {Domgy} */}
            <View >
            <TouchableOpacity
              style={{
                backgroundColor: colors.punkan,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                width: 150,
                height: 150,
                top: 2,
                left: -10,
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
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                top: -125,
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
                top: -80,
                right: -10,
                position: "absolute",
                zIndex: 3,
              }}
              onPress={() => toggleVisibilityRight(translateAnimRight, isVisibleRight, setIsVisibleRight, )} 
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
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                bottom: 95,
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
                top: -50,
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
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                top: -65,
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
                top: -55,
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
                bordertopleftradius: 50,
                bordertoprightradius: 60,
                borderbottomleftradius: 50,
                borderbottomrightradius: 50,
                borderWidth: 2,
                borderColor: colors.punkan,
                top: -70,
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
                top: -60,
                left: -8,
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
                top: -75,
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
                top: -70,
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
                top: -45,
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
                top: 10,
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
                bottom: 5,
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
                top: 5,
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
                Nenia Valenzuela
              </Text>
              <Text style={{ color: colors.punkan, fontSize: 14, left: -40 }}>
                User Insight Specialist
              </Text>
            </Animated.View>
          </View>
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
      {/* About Us Button */}
      <TouchableOpacity
        style={{
          flexDirection: "col",
          justifyContent: "center",
          width: 50,
          height: 60,
        }}
        onPress={() => navigation.navigate('about')}
      >
        <Image
          source={require("../assets/aboutBtn.png")}
          style={{
            alignSelf: "center",
            justifySelf: "center",
            top: 2,
            width: 40,
            height: 40,
          }}
        />
        <Text
          style={{
            color: colors.punkan,
            fontSize: 12,
            fontWeight: "900",
            marginTop: 5,
            left: 3,
          }}
        >
          About Us
        </Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity
        style={{
          flexDirection: "col",
          justifyContent: "center",
          width: 50,
          height: 60,
        }}
        onPress={() => navigation.navigate('home')}
      >
        <Image
          source={require("../assets/homebtn.png")}
          style={{
            alignSelf: "center",
            justifySelf: "center",
            top: 2,
            width: 40,
            height: 40,
          }}
        />
        <Text
          style={{
            color: colors.text,
            fontSize: 12,
            fontWeight: "900",
            marginTop: 5,
            left: 10,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity
        style={{
          flexDirection: "col",
          justifyContent: "center",
          width: 50,
          height: 60,
        }}
        onPress={''} // Call handleLogout on press
      >
        <Image
          source={require("../assets/Logout.png")}
          style={{
            alignSelf: "center",
            justifySelf: "center",
            top: 2,
            width: 40,
            height: 40,
          }}
        />
        <Text
          style={{
            color: colors.punkan,
            fontSize: 12,
            fontWeight: "900",
            marginTop: 5,
            left: 3,
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default About;
