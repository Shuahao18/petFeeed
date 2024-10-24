import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Image source={require("../assets/cart.png")} style={styles.image} />
          <Image
            source={require("../assets/burger.png")}
            style={styles.image}
          />
        </View>

        {/* Separate Row Section */}
        <View style={styles.row}>
          <Image
            source={require("../assets/kris.png")}
            style={styles.profile}
          />
          <Text style={styles.header}>Kris Avenido</Text>
        </View>
      </View>

      {/* Box Section Below Container */}
      <View style={styles.mainBox}>
        <View style={styles.contentbox}>
          <Text style={styles.boxText}>10% Discount</Text>
        </View>
        <View style={styles.contentbox}>
          <Text style={styles.boxText}>20% Discount</Text>
        </View>
        <View style={styles.contentbox}>
          <Text style={styles.boxText}>30% Discount</Text>
        </View>
      </View>

      <View style={styles.mainWrapper}>
        {/* Top Row of Boxes */}
        <View style={styles.rowWrapper}>
          <View style={styles.box}>
            <Image
              source={require("../assets/order.png")}
              style={styles.mage}
            />
            <Text style={styles.boxText}>Order History</Text>
          </View>

          <View style={styles.box}>
            <Image
              source={require("../assets/payment.png")}
              style={styles.mage}
            />
            <Text style={styles.boxText}>Payment Method</Text>
          </View>
        </View>

        {/* Bottom Row of Boxes */}
        <View style={styles.rowWrapper}>
          <View style={styles.box}>
            <Image
              source={require("../assets/address.png")}
              style={styles.mage}
            />
            <Text style={styles.boxText}>My Address</Text>
          </View>

          <View style={styles.box}>
            <Image
              source={require("../assets/vouchers.png")}
              style={styles.mage}
            />
            <Text style={styles.boxText}>My Vouchers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#9a7e6f",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#9A7E6F",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  column: {
    backgroundColor: "#9A7E6F",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 32,
    height: 40,
    resizeMode: "contain",
    marginRight: 8,
  },
  row: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    padding: 15,
    gap: "15%",
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  mainBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#54473F",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  contentbox: {
    width: 96,
    height: 108,
    backgroundColor: "#938A84",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  boxText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  mainWrapper: {
    width: "100%",
    marginTop: 30,
    // justifyContent: "space-between",
    flexDirection: "column", // Change to column to stack rows
    gap: 30,
    // margin: 15,
  },
  rowWrapper: {
    flexDirection: "row", // Each row will have two boxes
    justifyContent: "space-around", // Space boxes evenly
    width: "100%",
  },
  mage: {
    width: 92,
    height: 92,
    alignSelf: "center", // Center horizontally
  },
  box: {
    width: 162,
    height: 142,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
