import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {/* Header Box */}
      <View style={styles.headerContainer}>
        <View style={styles.contentBox}>
          {/* <Text style={styles.boxText}>Logo/Box</Text> */}
        </View>
        <Image source={require("../assets/pastry.jpg")} style={styles.pastry} />
      </View>

      <View style={styles.mainMenu}>
        {/* Fixed TouchableOpacity for "GET TO KNOW US" */}
        <TouchableOpacity
          style={styles.menuContainer}
          onPress={() => {
            console.log("Navigating to Home");
            navigation.navigate("Docs");
          }}
        >
          <Text style={styles.Text}>GET TO KNOW US</Text>
        </TouchableOpacity>

        {/* Changed View to TouchableOpacity for "SIGNING OUT" */}
        <TouchableOpacity
          style={styles.menuContainer}
          onPress={() => {
            console.log("Signing Out");
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.Text}>SIGNING OUT</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.headContainer}>
        {/* <Text style={styles.title}>About Us</Text> */}
        <Text style={styles.paragraph}>
          <Text style={styles.highlight}></Text>Welcome to ByteBakers where technology
        </Text>
        <Text style={styles.paragraph}>
           meets the art of baking! We  are a passionate 
        </Text>
        <Text style={styles.paragraph}>
         team of bakers and tech enthusiasts, driven
        </Text>
        <Text style={styles.paragraph}>
           by our love for creating mouth-watering
        </Text>
        <Text style={styles.paragraph}>
          pastries and a seamless online experience.
        </Text>
        <Text style={styles.paragraph}>
           Our mission is to bring you freshly baked
        </Text>
        
        <Text style={styles.paragraph}>goods, made with the finest ingredients,</Text>
        <Text style={styles.paragraph}>
          delivered straight to your door with Just a{" "}
        </Text>
        <Text style={styles.space}>few clicks </Text>

        <Text style={styles.paragraph}>At ByteBakers, we believe that indulgence</Text>
        <Text style={styles.paragraph}>should be both delicious and convenient.</Text>
        <Text style={styles.paragraph}>Whether you're craving classic favorites or</Text>
        <Text style={styles.paragraph}>innovative new treats, we bake each pastry</Text>
        <Text style={styles.paragraph}>with care, ensuring that every bite is a blend</Text>
        <Text style={styles.paragraph}>of flavor and craftsmanship.</Text>
        <Text style={styles.paragraph}>Join us in our journey to fuse the  warmth of </Text>
        <Text style={styles.paragraph}>a bakery with the efficiency of technology</Text>
        <Text style={styles.paragraph}>Let ByteBakers satisfy your sweet cravings</Text>
        <Text style={styles.paragraph}>—one byte at a time!</Text>

      </View>

      <View style={styles.navContainer}>
            <View style={styles.secColumn}>
                <TouchableOpacity 
                    onPress={() => {
                        console.log('');
                        // navigation.navigate("Beacon");
                        }}
                        >    
                    <Image 
                      source={require("../assets/home.png")} 
                      style={styles.home} 
                    />
               </TouchableOpacity>  


               <TouchableOpacity 
                    onPress={() => {
                        console.log('Navigating to About');
                        navigation.navigate("About");
                        }}
                        >  
                <Image
                  source={require("../assets/heartW.png")}
                  style={styles.heart}
                />
                </TouchableOpacity>
                

                
            <View style={styles.addColumn}>
                <Image
                  source={require("../assets/add.png")}
                  style={styles.add}
                />

            </View>

          <TouchableOpacity 
           onPress={() => {
               console.log('Navigating to Shop');
               navigation.navigate("Shop");
           }}
            >       
           <Image 
               source={require("../assets/shop.png")} 
               style={styles.shop} 
           />
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={() => {
               console.log('Navigating to Home');
               navigation.navigate("Home");
           }}
            >       
           <Image 
               source={require("../assets/user.png")} 
               style={styles.user} 
           />
         </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexGrow: 1,
    height: "118%",
    backgroundColor: "#9a7e6f",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#9a7e6f",
  },
  contentBox: {
    width: "100%",
    height: "50%",
    position: "absolute",
    backgroundColor: "#54473F",
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  space: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 2,
    lineHeight: 24,
    fontFamily: "Nunito",
    fontWeight: "900",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 2,
    lineHeight: 24,
    fontFamily: "Nunito",
    fontWeight: "900",
  },
  highlight: {
    fontWeight: "bold",
    color: "#ffd700",
  },
  pastry: {
    width: "90%",
    height: 192,
    justifyContent: "center",
    alignContent: "center",
    margin: 39,
    borderRadius: 15,
  },
  mainMenu: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuContainer: {
    width: "45%", 
    backgroundColor: "#54473F",
    borderRadius: 24,
    padding: 15,
    margin: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "center",
  },
  Text: {
    fontFamily: "Nunito",
    fontWeight: "900",
    fontSize: 14,
    color: "#FFFFFF",
  },
  navContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    backgroundColor: "#54473F",
    marginTop: 60,
  },
  secColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 10,
  },
  addWrapper: {
    padding: 20,
  },
  addColumn: {
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -40,
    left: "48%",
    transform: [{ translateX: -8.5 }],
    zIndex: 1,
    backgroundColor: "#54473f",
  },
  add: {},
  home: {},
  heart: {
    marginRight: 30,
  },
  shop: {
    marginLeft: 30,
  },
  extraContainer: {
    width: "1%",
    height: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#9a7e6f",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "relative",
    paddingVertical: 13,
    paddingHorizontal: 23,
    backgroundColor: "#fff",
  },
});

export default AboutScreen;
