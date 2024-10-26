import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1 }} 
      contentContainerStyle={styles.main}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.column}>
          <Image source={require("../assets/cart.png")} style={styles.image} />
          <Image
            source={require("../assets/burger.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.row}>
          <Image
            source={require("../assets/kris.png")}
            style={styles.profile}
          />
          <Text style={styles.header}>Kris Avenido</Text>
        </View>
      </View>

      <View style={styles.mainBox}>
        <View style={styles.contentbox}>
          <Text style={styles.boxText}>10% Discount</Text>
        </View>
        <View style={styles.contentbox}>
          <Text style={styles.boxText}>P70 Deposit</Text>
        </View>
        <View style={styles.contentbox}>
          <Text style={styles.boxText}>P32 Bonuses</Text>
        </View>
      </View>

      <View style={styles.mainWrapper}>
        <View style={styles.rowWrapper}>
          <View style={styles.box}>
            <Image
              source={require("../assets/order.png")}
              style={styles.mage}
            />
            <Text style={styles.text}>Order History</Text>
          </View>

          <View style={styles.box}>
            <Image
              source={require("../assets/payment.png")}
              style={styles.mage}
            />
            <Text style={styles.text}>Payment Method</Text>
          </View>
        </View>

        <View style={styles.rowWrapper}>
          <View style={styles.box}>
            <Image
              source={require("../assets/address.png")}
              style={styles.mage}
            />
            <Text style={styles.text}>My Address</Text>
          </View>

          <View style={styles.box}>
            <Image
              source={require("../assets/vouchers.png")}
              style={styles.mage}
            />
            <Text style={styles.text}>My Vouchers</Text>
          </View>
        </View>
      </View>

      <View style={styles.navContainer}>
        <View style={styles.secColumn}>
          <Image 
            source={require("../assets/home.png")} 
            style={styles.home} 
          />
          
          <Image
            source={require("../assets/heart.png")}
            style={styles.heart}
          />
          
          <View style={styles.addColumn}>
              <Image
                source={require("../assets/add.png")}
                style={styles.add}
              />
          </View>
         
          <Image 
            source={require("../assets/shop.png")} 
            style={styles.shop} 
          />
          
          <Image
            source={require("../assets/user.png")}
            style={styles.user}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    maxHeight: "140%",
    backgroundColor: "#9a7e6f",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20
    // paddingVertical: 20,
  },
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },
  column: {
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 30,
  },
  profile: {
    width: 100,
    height: 99,
    borderRadius: 20,
    marginLeft: 30,
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    fontFamily: "LazyDog",
    marginLeft: 20,
  },
  mainBox: {
    width: "100%",
    height: 171,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#54473F",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "LazyDog",
  },
  text: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "LazyDog",
  },
  mainWrapper: {
    width: "100%",
    marginTop: 30,
    gap: 30,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  mage: {
    width: 92,
    height: 92,
  },
  box: {
    width: 162,
    height: 142,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  navContainer: {
    display: "flex",
    width: "100%",
    height: "11%",
    alignItems: "center",
    justifyContent: "center",

  },
  secColumn: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#54473F",
    marginTop: 90
   
  },
  addWrapper: {
    padding: 20
  },
  addColumn: {
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -30, 
    left: "48%", 
    transform: [{ translateX: -8.5 }], 
    zIndex: 1, 
    backgroundColor: "#54473f",
  },
  add: {
    margin: 0
  },
  home: {
    marginLeft: "5%"
  },
  shop: {
    marginLeft: "20%"
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
    backgroundColor: "#fff"

  },
});
