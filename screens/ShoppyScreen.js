  import React from "react";
  import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity} from "react-native";
  import { useNavigation } from "@react-navigation/native";



    const ShoppyScreen = () => {
      const navigation = useNavigation(); 

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
                  source={require("../assets/search.png")} 
                  style={styles.searchIcon}
              />
              </View>

            </View>
          

          <View style={styles.shopContainer}>

              <View style={styles.shopBox}>

              <Image source={require("../assets/choco.png")} style={styles.choco} />

                      <Text style={styles.desc}>CHOCOLATE LAVA CAKE{'\n'}₱700{'\n'}4</Text>  
                      <Text style={styles.detailBtn}>More Details</Text>
                      {/* <Image source={require("../assets/Star.png")}style={styles.star}/> */}
                      <Image source={require("../assets/select.png")}style={styles.select}/>
              </View>

              <View style={styles.shopBox}>
                      <Image source={require("../assets/vanilla.png")} style={styles.product} />
                      <Text style={styles.desc}>MIXED BERRY PARFAIT {'\n'}₱300{'\n'}4</Text>  
                      <Text style={styles.detailBtn}>More Details</Text>            
                      {/* <Image source={require("../assets/Star.png")}style={styles.star}/> */}
                      <Image source={require("../assets/select.png")}style={styles.select}/>
              </View>

              <View style={styles.shopBox}>
                      <Image source={require("../assets/mocha.png")} style={styles.product} />
                      <Text style={styles.desc}>PANNA COTTA               {'\n'}₱300{'\n'}4</Text>  
                      <Text style={styles.detailBtn}>More Details</Text>        
                      {/* <Image source={require("../assets/Star.png")}style={styles.star}/>  */}
                      <Image source={require("../assets/select.png")}style={styles.select}/>
                      
              </View>


              <View style={styles.shopBox}>        
              <Image source={require("../assets/sproum.png")} style={styles.sproum} />
                      <Text style={styles.desc}>CHOCOLATE MOUSSE    {'\n'}400{'\n'}4</Text>  
                      <Text style={styles.detailBtn}>More Details</Text>        
                      {/* <Image source={require("../assets/Star.png")}style={styles.star}/>     */}
                      <Image source={require("../assets/select.png")}style={styles.select}/>
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
               console.log('Navigating to shop');
               navigation.navigate("Shop");
           }}
            >       
           <Image 
               source={require("../assets/shopW.png")} 
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
          marginTop: 50
          
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
            fontFamily: "Nunito",
            fontWeight: "900",            
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
          height: 81,
          marginRight: 10,
        },
        choco: {
          width:116,
          height: 81,
          marginRight: 1,
        },
        sproum: {
          width:116,
          height: 81,
          marginRight: 1,
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
          fontFamily: "Nunito",
          fontWeight: "900",
          fontSize: 20,
          color: "#FFFFFF",
          marginRight: 70,
        },
        desc: {
          padding: 10,
          fontFamily: "Nunito",
          fontWeight: "900",
          fontSize: 16,
          color: "#54473F",
          marginRight: 1,
        },
        detailBtn: {
          width: 59,  
          fontSize:9,  
          height: 12,  
          backgroundColor: "#54473F",
          color: "#FFFFFF",
          fontFamily: "Nunito",
          fontWeight: "900",
          borderRadius: 5,
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 80,
          left: 150, 
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
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 0,
          backgroundColor: "#54473F",
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
        searchIcon: {
          width: 24,  
          height: 24, 
          resizeMode: "contain",
          marginLeft: "70%"  
        },
      });
      export default ShoppyScreen;
