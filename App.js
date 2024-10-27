import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen"; 
import BeaconScreen from "./screens/BeaconScreen"; 
import StartupScreen from "./screens/StartScreen";
import TeamScreen from "./screens/TeamScreen";
import SecScreen from "./screens/SecScreen";
import ShoppyScreen from "./screens/ShoppyScreen";
import DocScreen from "./screens/DocScreen";
import ViewScreen from "./screens/ViewScreen";
import InfoScreen from "./screens/InfoScreen"
import LaunchScreen from "./screens/LaunchScreen";
import {appLoading} from 'expo';


const Stack = createNativeStackNavigator();

export default function App() {
  // Load the LazyDog font
  let [fontsLoaded] = useFonts({
    'LazyDog': require('./assets/fonts/Lazydog.otf'),
  });

  // Show loading spinner while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9a7e6f" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Beacon" component={BeaconScreen} />
        <Stack.Screen name="Team" component={TeamScreen}/>
        <Stack.Screen name="Second" component={SecScreen}/>
        <Stack.Screen name="Shop" component={ShoppyScreen}/>
        <Stack.Screen name="Docs" component={DocScreen}/>
        <Stack.Screen name="View" component={ViewScreen}/>
        <Stack.Screen name="Info" component={InfoScreen}/>
        <Stack.Screen name="Launch" component={LaunchScreen}/>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
