import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Employees from '../screens/employee/Employees';
import AddEmployee from '../screens/employee/addEmployee';



const Stack = createNativeStackNavigator();
 const EmployeeNavigator = (props) => {

 

    return (
  
      <Stack.Navigator
      initialRouteName='tab'
      screenOptions={{
        headerShown: false,
      }} 
      >
        
        
        <Stack.Screen
          name="employees"
          component={Employees}
          options={{ title: 'Employees' }}
        />
        
        <Stack.Screen
          name="addEmployee"
          component={AddEmployee}
          options={{ title: 'Welcome' }}
          initialParams={{setUser:props.setUser}}
        />
      </Stack.Navigator>
  
    );
  }
  export default EmployeeNavigator