import React from "react";
import { TouchableOpacity, Image, Animated } from "react-native";
import colors from "../constants/colors";

const animation = ({
  onPress,
  translateAnim,
  imageSource,
  text1,
  text2,
  position,
}) => {
  return (
    <View style={{ position: "absolute", ...position }}>
      <TouchableOpacity
        style={{
          backgroundColor: colors.punkan,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          width: 150,
          height: 150,
          paddingHorizontal: 10,
          zIndex: 3,
        }}
        onPress={onPress}
      >
        <Image
          source={imageSource}
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            resizeMode: "fit",
            borderRadius: 110,
          }}
        />
      </TouchableOpacity>

      <Animated.View
        style={{
          backgroundColor: colors.bg,
          flexDirection: "col",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          width: 300,
          height: 103,
          paddingHorizontal: 10,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 60,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderWidth: 2,
          borderColor: colors.punkan,
          transform: [{ translateX: translateAnim }],
          zIndex: 1,
        }}
      >
        <Text style={{ color: colors.punkan, fontSize: 16, left: 40 }}>
          {text1}
        </Text>
        <Text style={{ color: colors.punkan, fontSize: 14, left: 40 }}>
          {text2}
        </Text>
      </Animated.View>
    </View>
  );
};

export default animation;
