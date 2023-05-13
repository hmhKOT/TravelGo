import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Alert 
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
 
   const dataUser = {
    email : "hm@gmail.com",
    passs : "123"
   }
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    const handleEmailChange = (value) => {
      setEmail(value);
    };
  
    const handlePasswordChange = (value) => {
      setPassword(value);
    };
    
    const users = [
      { email: 'hmhoai.20it11@vku.udn.vn', password: '123' },
      { email: 'A', password: '2' },
      { email: 'user3@example.com', password: 'password3' },
    ];
  
    const handleSubmit = () => {
      const user = users.find((user) => user.email === email && user.password === password);
      if (!email || !password) {
        Alert.alert('Error', 'Please enter your email and password');
      } else if (!user) {
        Alert.alert('Error', 'Incorrect email or password');
      } else {
        // Navigate to HomeScreen
        navigation.navigate('TravelGO');
      }
    };
    
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Sign In
          </Text>

          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={handleEmailChange}
                
              placeholder="enter your email id"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>

        <Pressable onPress={handleSubmit}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})