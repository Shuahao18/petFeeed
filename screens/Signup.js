import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import colors from "../constants/colors";
  
  const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPass, setConfirm] = useState(false);
  
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 60,
          backgroundColor: colors.bg,
        }}
      >
        <View style= {{ 
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 0,
          right: -40,
          top: 40
         }}>
  
        <Text style={{ fontSize: 24,  color: colors.text,
        }}>Hello,</Text>
  
        <Text style={{ fontSize: 24, color: colors.text, marginBottom: 20  
        }}>Welcome To Pet Feeder</Text>
  
        </View>
  
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: "center",
            alignItems: "center",
            bottom: 140,
          }}
        >
          <Image
            source={require("../assets/dog.png")}
            style={{
              width: 230,
              height: 150,
              bottom: 30
            }}
          />
        </View>
  
        <View
          style={{
            flex: 2,
            width: "90%",
            position: "absolute",
            bottom: 80,
            borderRadius: 10,
            alignItems: "center",
            bottom: 20
          }}
        >
          {/* Email Input */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 67,
              width: "100%",
              borderRadius: 25,
              backgroundColor: colors.secondary,
              borderWidth: 2,
              borderColor: colors.primary,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../assets/email.png")}
              style={{
                width: 34,
                height: 34,
                marginRight: 30,
                left: 10,
               
            
              }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                flex: 1,
                color: colors.primary,
                fontSize: 20,
                
              }}
              placeholder="Email"
              placeholderTextColor="#672525"
              
            />
          </View>
  
          {/* Password Input */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 67,
              width: "100%",
              borderRadius: 25,
              backgroundColor: colors.secondary,
              borderWidth: 2,
              borderColor: colors.primary,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
          >
            {/* Eye icon on the left side for password visibility */}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  showPassword
                    ? require("../assets/lock.png") 
                    : require("../assets/lock.png") 
                }
                style={{
                  width: 34,
                  height: 34,
                  marginLeft: 10, 
                }}
              />
            </TouchableOpacity>
  
            {/* ConfirmPassword Text Input */}
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                flex: 1,
                color: "#000000",
                fontSize: 20,
                marginLeft: 20, 
              }}
              placeholder="Password"
              placeholderTextColor="#672525"
              secureTextEntry={!showPassword} 
            />
          </View>

              {/* Password Input */}
              <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 67,
              width: "100%",
              borderRadius: 25,
              backgroundColor: colors.secondary,
              borderWidth: 2,
              borderColor: colors.primary,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
          >
            {/* Eye icon on the left side for password visibility */}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  showPassword
                    ? require("../assets/lock.png") 
                    : require("../assets/lock.png") 
                }
                style={{
                  width: 34,
                  height: 34,
                  marginLeft: 10, // Adjust to align the icon properly
                }}
              />
            </TouchableOpacity>
  
            {/* Password Text Input */}
            <TextInput
              value={confirmPass}
              onChangeText={(text) => setPassword(text)}
              style={{
                flex: 1,
                color: "#000000",
                fontSize: 20,
                marginLeft: 20, // To provide space between the image and the text
              }}
              placeholder="Confirm password"
              placeholderTextColor="#672525"
              secureTextEntry={!confirmPass} // Toggle password visibility
            />
          </View>
  
          {/* Login Button */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              borderWidth: 2,
              borderColor: colors.primary,
              width: "100%",
              height: 90,
            }}
            onPress={() => alert("Button Pressed")}
          >
            <Text style={{ color: "white", fontSize: 20, color: colors.text }}>Login</Text>
          </TouchableOpacity>
          
          <Text style={{ color: "white", fontSize: 20, color: colors.primary, left: -30 
          }}>First time here?</Text>
  
          <Text style={{ color: "white", fontSize: 20, color: colors.text, top: -23, left: 65 
          }}>Register</Text>
          
  
        </View>
      </View>
    );
  };
  
  export default Signup;
  