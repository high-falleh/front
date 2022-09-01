import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Employees from '../screens/employee/Employees';
import AddEmployee from '../screens/employee/addEmployee';



const Stack = createNativeStackNavigator();
 const EmployeeNavigator = ({route}) => {
const user=route.params.user
console.log(user,'emplyeenavigator');
 

    return (
  
      <Stack.Navigator
      initialRouteName='employees'
      screenOptions={{
        // headerShown: false,
      }} 
      >
        
        
        <Stack.Screen
          name="employees"
          component={Employees}
          // initialParams={user}
          options={{ title: 'Employees' }}
        />
        
        <Stack.Screen
          name="addEmployee"
          component={AddEmployee}
          options={{ title: 'Welcome' }}
      
        />
      </Stack.Navigator>
  
    );
  }
  export default EmployeeNavigator