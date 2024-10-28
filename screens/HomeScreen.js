import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
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
                <TouchableOpacity 
                    onPress={() => {
                        console.log('');
                        // navigation.navigate("");
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
                  source={require("../assets/heart.png")}
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
               source={require("../assets/personW.png")} 
               style={styles.user} 
           />
         </TouchableOpacity>
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
    fontWeight: "900",
    color: "#ffffff",
    fontFamily: "Nunito",
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
    fontFamily: "Nunito",
    fontWeight: "900"
  },
  text: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Nunito",
    fontWeight: "900"
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
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    backgroundColor: "#54473F",
    marginTop: 60
  },
  secColumn: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 10,
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
    top: -40, 
    left: "48%", 
    transform: [{ translateX: -8.5 }], 
    zIndex: 1, 
    backgroundColor: "#54473f",
  },
  add: {
    
  },
  home: {
  },
  heart: {
    marginRight: 30,
  },
  shop: {
    marginLeft: 30
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
