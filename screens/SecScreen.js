import React from 'react';
import { View, StyleSheet, Image, ScrollView, Text} from 'react-native';

const SecScreen = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.flyerContainer}>

        {/* Heading Image with Button on Top-Left */}
        <View style={styles.profileContainer}>
          <Image source={require('../assets/slideBtn.png')} style={styles.btn} />
        </View>
        <Image source={require('../assets/meredores.png')} style={styles.profile} />
          <Image source={require('../assets/avenido.png')} style={styles.profile} />
          <Image source={require('../assets/macahilo.png')} style={styles.profile} />
        {/* Profiles */}
        <View style={styles.headingContainer}>
            <View style={styles.homeContainer}>
                    <Text style={styles.Text}>Home</Text>
        </View>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#54473F',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 40

  },
  flyerContainer: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#1D2023',
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headingContainer: {
    width: 300,
    height: 96,
    // marginBottom: 20,
    position: 'relative', // Allows absolute positioning of button
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: 50
  },
  btn: {
    position: 'absolute',
    top: 10,
    left: 1, // Adjust to move it closer to the upper left of heading
    width: 58,
    height: 54,
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
  },
  profile: {
    width: '90%',
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    marginTop: 50,
    resizeMode: 'cover',
  },
  homeContainer: {
    width: 208,
    height: 40,
    backgroundColor: "#54473F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 37
  },
  Text: {
    fontSize: 16,
    color: "#ffffff"
  }
});

export default SecScreen;
