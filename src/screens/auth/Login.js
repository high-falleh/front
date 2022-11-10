import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles/styleAuth";
import axios from "axios";

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
export default function LoginScreen({ navigation, route }) {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [messsage, setMessage] = useState("");
  const [val, setVal] = useState("");

  const login = () => {
    axios
      .post(`http://${ip}:3000/api/user/login`, {
        userEmail: userEmail,
        userPassword: userPassword,
      })
      .then((result) => {
        setMessage(result.data[0]);
       
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
  };

  const onRegisterPress = () => {
    navigation.navigate("register");
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
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  */}
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}></Text>
          <Image
            style={{ height: 80, width: "100%" }}
            source={require("../../../assets/icon.png")}
          />
          <TextInput
            placeholder="Email"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={setUserEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={setUserPassword}
            secureTextEntry={true}
          />
          <Button
            buttonStyle={styles.loginButton}
            onPress={() => login()}
            title="Login"
          />
          {/* <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" /> */}
          <Button
            containerStyle={styles.fbLoginButton}
            type="clear"
            onPress={() => onRegisterPress()}
            title="Register"
          />
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
}
