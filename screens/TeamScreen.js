// import React from 'react';
// import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const TeamScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView 
//       contentContainerStyle={styles.scrollContainer} 
//       showsVerticalScrollIndicator={false}
//     >
//       <View style={styles.flyerContainer}>

//         <View style={styles.headingContainer}>
//           <TouchableOpacity
//             style={styles.btnTouchable} 
//             onPress={() => {
//               console.log('teamBtn click');
//               navigation.navigate('Second');
//             }}
//           >
//             <Image 
//               source={require('../assets/go.png')} 
//               style={styles.forward} 
//             />
//           </TouchableOpacity>

//           <Image 
//             source={require('../assets/team14.png')} 
//             style={styles.heading} 
//           />
//         </View>

      
//         <View style={styles.profileContainer}>
//           <Image source={require('../assets/joshua.png')} style={styles.profile} />
//           <Image source={require('../assets/ave.png')} style={styles.profile} />
//           <Image source={require('../assets/macahilo.png')} style={styles.profile} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     backgroundColor: '#54473F',
//     alignItems: 'center',
//     paddingVertical: 20,
//     paddingTop: 40,
//   },
//   flyerContainer: {
//     width: '90%',
//     paddingVertical: 10,
//     alignItems: 'center',
//     backgroundColor: '#1D2023',
//     borderRadius: 25,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   headingContainer: {
//     width: 300,
//     height: 96,
//     marginBottom: 20,
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//     marginTop: 50,
//   },
//   btnTouchable: {
//     position: 'absolute',
//     top: -20, 
//     right: -13,
//     zIndex: 10, 
//     padding: 10, 
//   },
//   forward: {
//     width: 56,
//     height: 54,
//     resizeMode: 'contain',
//   },
//   profileContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   profile: {
//     width: '90%',
//     height: 200,
//     marginVertical: 10,
//     borderRadius: 15,
//     resizeMode: 'cover',
//   },
// });

// export default TeamScreen;
