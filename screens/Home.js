
import {ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, Easing, Image,} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

  const Home = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;
    return(
        <View style={{flex: 1, 
                      alignItems: 'center',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      paddingTop:60,
                      backgroundColor: colors.bg}}>


                 <Image
                 source={require("../assets/pawpaw.png")}
                 style={{ 
                    alignSelf: 'flex-end',
                    marginRight: 20
                  }}
                 >

                 </Image>
              <Text style={{ fontSize: 65, color: colors.text,  }}>Feeding </Text>
              <Text style={{ fontSize: 48, color: colors.bg, backgroundColor: colors.punkan  }}>Time?</Text>

          
         <Image
        source={require("../assets/catsye.png")}
        style={{
          alignSelf: 'center',
          justifySelf: 'center',
          top: 20,
          width: 308,
          height: 190,
        }}
      />


<View style={{flex: 2, width: '100%', padding: 12, gap: 10,height: 'auto',  justifyContent: 'center', alignItems: 'center',position: 'absolute', bottom: 50 ,backgroundColor: colors.bg,borderRadius: 10, 
  }}
>
  <TouchableOpacity
    style={{backgroundColor: colors.punkan , flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius:50, width: '90%', height: 80,paddingHorizontal: 10, 
    }}
    onPress={() => alert('Button Pressed')}
  >
       
    <Text style={{ color: colors.bg , fontSize: 24 }}>FEED</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={{backgroundColor: colors.bg , flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius:50, width: '90%', height: 80,paddingHorizontal: 10, borderWidth: 2, borderColor: colors.punkan
    }}
    onPress={() => alert('Button Pressed')}
  >
        
    <Text style={{ color: colors.punkan , fontSize: 24 }}>STOP</Text>
  </TouchableOpacity>



  {/* <TouchableOpacity
    style={{backgroundColor: '#9a7e6f', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',borderRadius: 25, width: '90%', height: 80, marginTop: 20,paddingHorizontal: 10, 
    }}
    onPress={() => alert('Button Pressed')}
  >
   
    <Text style={{ color: 'white', fontSize: 24 }}>Register</Text>
  </TouchableOpacity> */}
    <View style= {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, borderWidth: 2, width: '100%', height: 100, bottom: -20


     }}>

        <Image
        source={require("../assets/aboutBtn.png")}
        style={{
          alignSelf: 'center',
          justifySelf: 'center',
          top: 20,
          width: 60,
          height: 40,
        }}
        />

        
        
      <Image
        source={require("../assets/homebtn.png")}
        style={{
          alignSelf: 'center',
          justifySelf: 'center',
          top: 20,
          width: 40,
          height: 40,
        }}
        />
      

  
        <Image
        source={require("../assets/Logout.png")}
        style={{
          alignSelf: 'center',
          justifySelf: 'center',
          top: 20,
          width: 40,
          height: 40,
        }}
        placeholder ="Logout"
        />

        

        

    </View>

</View>
        </View>

    )}
        export default Home;
      
