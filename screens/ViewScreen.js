import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const ViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {/* Header Section */}

      <View style={styles.docsContainer}>
                <Text style={styles.header}>To enhance the professional appearance of our layout,  </Text>
                <Text style={styles.header}>we’ve incorporated increased line spacing. This not</Text>
                <Text style={styles.header}>only improves legibility but also contributes to an airy, </Text>
                <Text style={styles.header}>open feel, which is essential for modern design.</Text>
                <Text style={styles.header}>Our color palette is intentionally curated to evoke a </Text>
                <Text style={styles.header}>minimalist vibe. We primarily utilize a combination of</Text>
                <Text style={styles.header}>black and white, which establishes a clean and </Text>
                <Text style={styles.header}>sophisticated foundation. Additionally, we introduce</Text>
                <Text style={styles.header}>shades of brown to add warmth and character without</Text>
                <Text style={styles.header}>compromising the overall minimalism. This thoughtful</Text>
                <Text style={styles.header}>color scheme helps to visualize our design principles</Text>
                <Text style={styles.header}>effectively, balancing simplicity with a hint of charm.</Text>
    
          </View>

          <View style={styles.headerContainer}>
        <Image source={require("../assets/bread.png")} style={styles.bread} />
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
  },
  bread: {
    width: "110%",
    height: 360, 
    resizeMode: "cover", 
  },
  docsContainer: {
    width: "102%",
    marginLeft: 10,
    marginTop: 120,
  },
  header: {
    fontSize: 16,
    lineHeight: 15,
    color: "#333",
    marginBottom: 15,
  },
  bulletContainer: {
    marginTop: 10,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default ViewScreen;
