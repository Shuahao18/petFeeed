import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from "react-native";



  const ShopScreen = () => {
      return (
        <ScrollView contentContainerStyle={styles.containerMain}>
          {/* Header Box */}
          <View style={styles.headerContainer}>
              <View style={styles.contentBox}>
                    {/* <Text style={styles.boxText}>Logo/Box</Text> */}
                 
                    <Text style={styles.Text}>What would you like{'\n'}to order</Text>

                    <Image source={require("../assets/bell.jpg")} style={styles.image} />
                    <Image source={require("../assets/burger.png")}style={styles.image}/>
              </View>
              <View style={styles.searchContainer}>
                    <TextInput 
                      placeholder="Pastry" 
                      placeholderTextColor="#fff"
                      placeholderFontFammily="LazyDog"
                      style={styles.searchInput} 
                    />

            <Image
                source={require("../assets/search.png")} // Ensure you have the correct path for search.png
                style={styles.searchIcon}
            />
            </View>

          </View>
        

        <View style={styles.shopContainer}>

            <View style={styles.shopBox}>

            <Image source={require("../assets/choco.png")} style={styles.product} />

                    <Text style={styles.desc}>Chocolate Lava Cake{'\n'}₱700{'\n'}4</Text>  
                    <Text style={styles.detailBtn}>More Details</Text>
                    <Image source={require("../assets/Star.png")}style={styles.star}/>
                    <Image source={require("../assets/select.png")}style={styles.select}/>
            </View>

            <View style={styles.shopBox}>
                    <Image source={require("../assets/vanilla.png")} style={styles.product} />
                    <Text style={styles.desc}>Mixed Berry Parfait{'\n'}₱300{'\n'}4</Text>  
                    <Text style={styles.detailBtn}>More Details</Text>            
                    <Image source={require("../assets/Star.png")}style={styles.star}/>
                    <Image source={require("../assets/select.png")}style={styles.select}/>
            </View>

            <View style={styles.shopBox}>
                    <Image source={require("../assets/mocha.png")} style={styles.product} />
                    <Text style={styles.desc}>Panna Cotta             {'\n'}₱300{'\n'}4</Text>  
                    <Text style={styles.detailBtn}>More Details</Text>        
                    <Image source={require("../assets/Star.png")}style={styles.star}/> 
                    <Image source={require("../assets/select.png")}style={styles.select}/>
                    
            </View>


            <View style={styles.shopBox}>        
            <Image source={require("../assets/sproum.png")} style={styles.product} />
                    <Text style={styles.desc}>Chocolate Mousse   {'\n'}400{'\n'}4</Text>  
                    <Text style={styles.detailBtn}>More Details</Text>        
                    <Image source={require("../assets/Star.png")}style={styles.star}/>    
                    <Image source={require("../assets/select.png")}style={styles.select}/>
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

    const styles = StyleSheet.create({
      containerMain: {
        flexGrow: 1,
        height: "119%",
        backgroundColor: "#9a7e6f",
      },
      headerContainer: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#9a7e6f",
      },
      contentBox: {
        width: "100%",
        height: 148,
        backgroundColor: "#54473F",
        flexDirection: "row",
        padding: 15,
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "flex-end",
        alignItems: "flex-start",
      },
      shopContainer: {
        maxWidth: "100%",
        maxHeight: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40
        
      },
      shopBox: {
        width: "100%",
        height: 148,
        backgroundColor: "#9A7E6F",
        flexDirection: "row",
        padding: 15,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        justifyContent: "flex-end",
        alignItems: "flex-start",
      },
      textHeader: {
        position: "absolute",
        jus: "flex-start",
        alignItems: "flex-start",
        marginRight: 30
      },
      boxText: {
        color: "#000",
        fontSize: 16,
        textAlign: "center",
      },
      searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        margin: -13
      },
        searchInput: {
          flex: 1,
          width: 300,
          height: 44,
          position: "absolute",
          backgroundColor: "#9A7E6F",
          fontFamily: 'LazyDog',
          borderRadius: 10,
          paddingHorizontal: 15,
          borderWidth: 1,        
          borderColor: "#834D1E",
          fontSize: 16,
          color: "#333",
      },
      space: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 2,
        lineHeight: 24,
        fontFamily: "LazyDog",
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
        fontFamily: "LazyDog",
      },
      highlight: {
        fontWeight: "bold",
        color: "#ffd700",
      },
      image: {
        width: 32,
        height: 40,
        resizeMode: "contain",
        marginRight: 8,
      },
      select: {
        width: 30,
        height: 30,
        marginTop: 30
      },
      product: {
        width: 116,
        height: 94,
        marginLeft: 40,
      },
      mainMenu: {
        width: "90%",
        height: "auto",
        backgroundColor: "#9A7E6F",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      menuContainer: {
        width: "50%",
        backgroundColor: "#54473F",
        borderRadius: 24,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
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
        padding: 15,
        fontFamily: "LazyDog",
        fontSize: 20,
        color: "#FFFFFF",
        marginRight: 40,
      },
      desc: {
        padding: 15,
        fontFamily: "LazyDog",
        fontSize: 16,
        color: "#54473F",
        marginRight: 2,
      },
      detailBtn: {
        width: 80,  // Adjust width if needed for centering
        fontSize:9,  // Slightly larger font size for better appearance
        height: 20,  // Adjust height for better alignment
        backgroundColor: "#54473F",
        color: "#FFFFFF",
        fontFamily: "LazyDog",
        borderRadius: 5,
      
        // Center the text within the button
        textAlign: "center",
        textAlignVertical: "center", // Ensures vertical centering
        justifyContent: "center",
        alignItems: "center",
      
        // Adjust position on the screen
        position: "absolute",
        top: 90,
        left: 150, // Fine-tune for proper alignment within the container
      },
      
      star: {
        width:60,
        height: 13,
        position: "absolute",
        top: 68,
        left: 161,
        backgroundColor: "#FFFFFF",
      },
      navContainer: {
        display: "flex",
        width: "100%",
        height: "11%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18
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
      searchIcon: {
        width: 24,  // Set the width for the icon
        height: 24, // Set the height for the icon
        resizeMode: "contain",
        marginLeft: "70%"// Space between input and icon
       
      },
     
    });
    export default ShopScreen;
