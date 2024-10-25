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
