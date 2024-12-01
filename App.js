import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Home from "./screens/Home";
import About from "./screens/About"
import AboutScreen from "./screens/About";
import BeaconScreen from "./screens/BeaconScreen";
import Startup from "./screens/Startup";
import TeamScreen from "./screens/TeamScreen";
import SecScreen from "./screens/SecScreen";
import ShoppyScreen from "./screens/ShoppyScreen";
import DocScreen from "./screens/DocScreen";
import ViewScreen from "./screens/ViewScreen";
import InfoScreen from "./screens/InfoScreen";
import LaunchScreen from "./screens/LaunchScreen";
import Signup from "./screens/Signup";
import { appLoading } from "expo";

const Stack = createNativeStackNavigator();

export default function App() {
  // Load the LazyDog font
  let [fontsLoaded] = useFonts({
    LazyDog: require("./assets/fonts/Lazydog.otf"),
    Nunito: require("./assets/fonts/NunitoSans.ttf"),
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
          <Stack.Screen name="about" component={About}/>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="login" component={Login} />
    
          <Stack.Screen name="start" component={Startup} />
    
          <Stack.Screen name="landing" component={Landing} />
        {/* <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Beacon" component={BeaconScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="Second" component={SecScreen} />
        <Stack.Screen name="Shop" component={ShoppyScreen} />
        <Stack.Screen name="Docs" component={DocScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Launch" component={LaunchScreen} /> */}
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
