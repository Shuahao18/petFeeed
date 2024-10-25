// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0t_dh0f-SA4zLMdS9nd5mFk0jKPdy2gc",
  authDomain: "fir-logingin.firebaseapp.com",
  projectId: "fir-logingin",
  storageBucket: "fir-logingin.appspot.com",
  messagingSenderId: "22245453623",
  appId: "1:22245453623:web:a898500af289304260b4b2",
};

// Initialize Firebase app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication
let auth;
if (Platform.OS === 'web') {
  auth = getAuth(app); // Default persistence for web
} else {
  // For mobile platforms (Android/iOS)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth };
