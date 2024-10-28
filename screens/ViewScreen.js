import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ViewScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView 
      contentContainerStyle={styles.containerMain}
      keyboardShouldPersistTaps="handled" 
    >
      {/* Main Text Section */}
      <View style={styles.docsContainer}>
        <Text style={styles.header}>
          To enhance the professional appearance of our  
        </Text>
        <Text style={styles.header}>
          layout, we’ve incorporated increased line spacing. 
        </Text>
        <Text style={styles.header}>
        This not only improves legibility but also contributes 
        </Text>
        <Text style={styles.header}>
        to an airy, open feel, which is essential for modern 
        </Text>
        <Text style={styles.header}>
        design. {'\n'}
        </Text>
        <Text style={styles.header}>
          Our color palette is intentionally curated to evoke a 
        </Text>
        <Text style={styles.header}>
          minimalist vibe. We primarily utilize a combination of
        </Text>
        <Text style={styles.header}>
          black and white, which establishes a clean and 
        </Text>
        <Text style={styles.header}>
          sophisticated foundation. Additionally, we introduce
        </Text>
        <Text style={styles.header}>
          shades of brown to add warmth and character 
        </Text>
        <Text style={styles.header}>
          without compromising the overall minimalism. This 
        </Text>
        <Text style={styles.header}>
          thoughtful color scheme helps to visualize our design 
        </Text>
        <Text style={styles.header}>
          principles effectively, balancing simplicity with a hint
        </Text>
        <Text style={styles.header}>
          of charm.        
        </Text>
       
      </View>

      {/* Forward Button */}
      <TouchableOpacity
        style={styles.btnTouchable}
        onPress={() => {
          console.log("viewBtn click");
          navigation.navigate("Team");
        }}
      >
        <Image 
          source={require("../assets/forward.png")} 
          style={styles.forward} 
        />
      </TouchableOpacity>

      {/* Bread Image Section */}
      <View style={styles.headerContainer}>
        <Image 
          source={require("../assets/bread.png")} 
          style={styles.bread} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  headerContainer: {
    width: "110%",
    alignItems: "center",
    marginTop: 20,
  },
  bread: {
    width: "110%",
    height: 410,
    resizeMode: "cover",
  },
  docsContainer: {
    width: "102%",
    marginLeft: 10,
    marginTop: 120,
  },
  header: {
    fontSize: 16,
    color: "#4A4E4D",
    fontFamily: "Nunito",
    fontWeight: "700"
  },
  forward: {
    width: 56,
    height: 54, 
    resizeMode: "contain",
  },
  btnTouchable: {
    position: "absolute",
    top: 35, 
    right: 10, 
    zIndex: 10, 
    padding: 10, 
  },
});

export default ViewScreen;
