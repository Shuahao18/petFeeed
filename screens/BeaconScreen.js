import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

    const BeaconScreen = () => {
      return (
        <ScrollView contentContainerStyle={styles.userContainer}>
            <View style={styles.flyerContainer}>
              <Image source={require("../assets/flyer.jpg")} style={styles.flyer} />
            </View>
      
          <View style={styles.listContainer}>
      
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
        
                <View style={styles.textContainer}>
                  <Text style={styles.leftHeader}>Kris Avenido</Text>
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.rightHeader}>Andrie Macahilo</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                  <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
        
                <View style={styles.textContainer}>
                  <Text style={styles.leftHeader}>Joshua Meredores</Text>
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.rightHeader}>Elton John Polizon</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                  <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
        
                <View style={styles.textContainer}>
                  <Text style={styles.leftHeader}>Ella Mae Tebelin</Text>
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.rightHeader}>Nenia Valenzuela</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
            </View>
      
          </View>

          <View style={styles.headContainer}>
            <Text style={styles.paragraph}>
            <Text style={styles.highlight}></Text>We Love hearing from our customers! share your</Text>
            <Text style={styles.paragraph}>experiences with us on social media or leave a</Text>
            <Text style={styles.paragraph}>testemonial on our website. you can find us on</Text>
            <Text style={styles.paragraph}>instagram and Facebook at @ByteBakesPS. For </Text>
            <Text style={styles.paragraph}>inquiries or special orders, contact us at </Text>
            <Text style={styles.paragraph}>info@bytebakes.com or call us at (555) </Text>
            <Text style={styles.paragraph}>123-4567. </Text>
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
      userContainer: {
        flexGrow: 1,
        height: "130%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#9a7e6f',
        padding: 5,
      },
      leftHeader: {
        fontSize: 24,
        fontFamily: 'LazyDog',
        color: '#fff',
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center"
      },
      rightHeader: {
        fontSize: 24,
        fontFamily: 'LazyDog',
        color: '#fff',
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center"
      },
      flyerContainer: {
        maxWidth: 338,
        justifyContent: 'center',
        margin: 20,
        padding: 3,
      },
      flyer: {
        width: 338,
        height: 119,
        borderRadius: 20,
      },
      listContainer: {
        flex: 1,
        width: "90%",
        flexDirection: 'column',
        alignItems: 'center',
      },
      row: {
        width: '100%',
        height: "100", 
        // backgroundColor: "#F0210D",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 10,
      },
      textContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: "center"
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      profile: {
        width: 80,
        height: 80,
        borderRadius: 25,
        marginLeft: 10, 
      },
      navContainer: {
        display: "flex",
        width: "103%",
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
      headContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      paragraph: {
        fontFamily: 'LazyDog',
        fontSize: 13,
        color: "#FFFFFF",
      },
    });

    export default BeaconScreen;
