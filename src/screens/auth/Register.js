



import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/styleAuth";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Facebook from "expo-facebook";
import ip from "../../constant/ip";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   TeamWork makes the dream Work        //////////////////////////////////////////////////
/////////////////////////////////////////////////        Riadh & Khalil & Tahar          ///////////////////////////////////////////////////
////////////////////////////////////////////////              HighFalleh                ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const appId = "1047121222092614";

export default function Register({ navigation, route }) {
  const [userEmail, setUserEmail] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userDateOfBirth, setUserDateOfBirth] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");

  const onRegisterPress = () => {
    route.params.setUser(false);
  };
  const onLoginPress = () => {
    navigation.navigate("login");
  };

  const signUp = () => {
    if (
      !userFullName ||
      !userEmail ||
      !userPassword ||
      !userDateOfBirth ||
      !userPhone
    ) {
      setMessage("Please insert all the informations");
      return;
    }
    if (
      userPassword.length < 8 ||
      userPassword.length > 25 ||
      !userPassword.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)
    ) {
      setMessage(
        "Your password is weak , please add capital letter and characters"
      );
      console.log(message)
      return;
    }
    if (!userEmail.includes("@")) {
      setMessage("Your email is wrong");
      return;
    } else {
      axios
        .post(`http://${ip}:3000/api/user/register`, {
          userFullName: userFullName,
          userEmail: userEmail,
          userPassword: userPassword,
          userDateOfBirth: userDateOfBirth,
          userPhone: userPhone,
        })
        .then((result) => {
       
          setMessage(result.data[0])
          console.log(result.data);
          console.log(message);
          if (result.data[0] == "connected") {
            AsyncStorage.setItem("user", JSON.stringify(result.data[1]));
            route.params.setUser(result.data[1]);
            axios.post(
              `http://${ip}:3000/api/user/addSession`,
              result.data[1].userId
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //   const onFbLoginPress = async () => {
  //     try {
  //       await Facebook.initializeAsync({
  //         appId,
  //       });
  //       const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //         permissions: ["public_profile", "email"],
  //       });
  //       if (type === "success") {
  //         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //         Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
  //       }
  //     } catch ({ message }) {
    //       Alert.alert(`Facebook Login Error: ${message}`);
    //     }
  //   };
  
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}></Text>
          <Image
            style={{ height: 80, width: "100%" }}
            source={require("../../../assets/splash.png")}
            />
            <Text>{message}</Text>
          <TextInput
            placeholder="FullName"
            onChangeText={setUserFullName}
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
          />
          <TextInput
            placeholder="Email"
            onChangeText={setUserEmail}
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
          />
          <TextInput
            placeholder="Password"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            onChangeText={setUserPassword}
          />
          <TextInput
            placeholder="Date of Birth"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={setUserDateOfBirth}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={setUserPhone}
          />
          <Button
            buttonStyle={styles.loginButton}
            onPress={() => signUp()}
            title="Register"
          />
          {/* <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" /> */}
          <Button
            containerStyle={styles.fbLoginButton}
            type="clear"
            onPress={() => onLoginPress()}
            title="Login"
          />
        </View>
      </View>
      {/* </TouchableWithoutFeedback>  */}
    </KeyboardAvoidingView>
  );
}
