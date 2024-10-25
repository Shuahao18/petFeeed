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
                  <Text style={styles.rightHeader}>Ella Brown</Text>
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
                  <Text style={styles.leftHeader}>Kris Avenido</Text>
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.rightHeader}>Ella Brown</Text>
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
                  <Text style={styles.leftHeader}>Kris Avenido</Text>
                </View>
            </View>
      
            <View style={styles.row}>
                <View style={styles.textContainer}>
                  <Text style={styles.rightHeader}>Ella Brown</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image source={require("../assets/kris.png")} style={styles.profile} />
                </View>
            </View>
      
          </View>
        </ScrollView>
      );
    };

    const styles = StyleSheet.create({
      userContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#9a7e6f',
        paddingBottom: 20,
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
    });

    export default BeaconScreen;
