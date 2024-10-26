import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const TeamScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.userContainer}>
      <View style={styles.flyerContainer}>
        <Text style={styles.title}>Meet Our Team</Text>
      
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexGrow: 1,
    backgroundColor: '#54473F', // Corrected property
    padding: 5,
    alignItems: 'center',
  },
  flyerContainer: {
    width: "90%",
    height: "90%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    paddingTop: 38,
    borderRadius: 25,
    backgroundColor: '#1D2023   ', 
    borderRadius: 8,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  flyerImage: {
    width: '100%',
    height: 200, // Adjust as needed
    resizeMode: 'contain',
    borderRadius: 8,
  },
  membersContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  membersTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 10,
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    width: '90%', // Adjust to desired width
    elevation: 2, // Shadow for Android
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberName: {
    fontSize: 16,
    color: '#333',
  },
});

export default TeamScreen;
