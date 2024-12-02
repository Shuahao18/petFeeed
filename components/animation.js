import { Animated, Easing } from "react-native";

// Function for toggling visibility of the first animated component
export const toggleVisibility = (translateAnim, isVisible, setIsVisible) => {
  Animated.timing(translateAnim, {
    toValue: isVisible ? 0 : -350,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.ease,
  }).start();

  setIsVisible(!isVisible);
};

// Function for toggling visibility of the second animated component
export const toggleVisibilityRight = (translateAnimRight, isVisibleRight, setIsVisibleRight) => {
  Animated.timing(translateAnimRight, {
    toValue: isVisibleRight ? 0 : 300,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.ease,
  }).start();

  setIsVisibleRight(!isVisibleRight);
};