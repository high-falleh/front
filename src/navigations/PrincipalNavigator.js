import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
// import TabNavigator from './TabNavigation/TabNavigator'
// import MessagesNavigator from './MessagesNavigator';
// import PostNavigator from './PostNavigator';


const Stack = createNativeStackNavigator();

export const SignOutNavigator = (props) => {
  var user=props.user
  var setUser=props.setUser
  return (
   
    <Stack.Navigator
      initialRouteName='login'
      >
      <Stack.Screen name="login" component={Login} options={{ title: 'LOGIN' }} initialParams={{setUser:setUser,user:user}}  />
      <Stack.Screen name="register" component={Register} initialParams={{setUser:setUser,user:user}} />
    </Stack.Navigator>
   
  );
};
export const SignInNavigator = (props) => {

 

  return (

    <Stack.Navigator
    initialRouteName='tab'
    screenOptions={{
      headerShown: false,
    }} 
  
    >
      
      {/* <Stack.Screen
        name="tab"
        component={TabNavigator}
        options={{ title: 'Welcome' }}
        initialParams={{setUser:props.setUser}}
      /> */}
      {/* <Stack.Screen
        name="newPost"
        component={PostNavigator}
        options={{ title: 'New post' }}
      />
      <Stack.Screen
        name="messages"
        component={MessagesNavigator}
        options={{ title: 'Messages' }}
      /> */}
    </Stack.Navigator>

  );
}