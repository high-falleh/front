import React,{useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from "../styles/styleAuth";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";

const appId = "1047121222092614";

let user={username:'khalil',password:'123'}
let user1={username:'riadh',password:'123'}


export default function LoginScreen({navigation,route}) {

  const [username,setUsername]=useState(null)
  const [password,setPassword]=useState(null)
  var setUser=route.params.setUser
  var users=route.params.user
  console.log(setUser,users);
  
  const onLoginPress = () => {
    let person={
      username:username,
      password:password
    }
    console.log('person',person);
    console.log(users);
    console.log(person.password===user.password&&person.username===user.username);
    if(person.password===user.password&&person.username===user.username){
      let obj=JSON.stringify(person)
      AsyncStorage.setItem('user',obj)
      setUser(person)
    }

  };

  const onRegisterPress = () => {navigation.navigate('register')};

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
            <Image style={{height:80,width:'100%'}} source={require('../../assets/icon.png')} />
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={setUsername}/>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={setPassword} secureTextEntry={true} />
            <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Login" />
            {/* <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" /> */}
            <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onRegisterPress()} title="Register" />
          </View>
        </View>
      {/* </TouchableWithoutFeedback> */}
     </KeyboardAvoidingView>
  );
}
