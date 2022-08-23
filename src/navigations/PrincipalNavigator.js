import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Home from '../screens/Home';
import EmployeeNavigator from './EmployeeNavigator';
// import PostNavigator from './PostNavigator';


const Stack = createNativeStackNavigator();

export const SignOutNavigator = (props) => {
  var user=props.user
  var setUser=props.setUser
  return (
   
    <Stack.Navigator
      initialRouteName='login'
      >
      <Stack.Screen name="login" component={Login} options={{ title: 'LOGIN' }} initialParams={{setUser:setUser,user:user}} />
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
      
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: 'Welcome' }}
        initialParams={{setUser:props.setUser}}
      />
      <Stack.Screen
        name="employees"
        component={EmployeeNavigator}
        options={{ title: 'Employees' }}
      />
      {/* <Stack.Screen
        name="messages"
        component={MessagesNavigator}
        options={{ title: 'Messages' }}
      /> */}
    </Stack.Navigator>

  );
}