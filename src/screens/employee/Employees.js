import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Employees = ({ navigation, route }) => {
  const [AllEmployees, setAllEmployees] = useState([]);
  const [count, setCount] = useState(0);
  var array = [{ headline: "Test", text: "Test text", send_at: "test date" }];

  // console.log(route.params);
  var user = route.params.user;

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/employee/getAllEmployeesByUserId/${user.userId}`
      )
      .then((result) => {
        setAllEmployees(result.data[1]);
      });
  }, []);

  return (
    <View>
      <Text>Employees</Text>
      {AllEmployees.map((elem, index) => (

<View key={index}>
{elem.employeeName}
</View>
))}
      <Button title="back" onPress={() => navigation.goBack()} />
      <Button
        title="add"
        onPress={() => navigation.navigate("addEmployee", { user: user })}
      />
      

    </View>
  );
};

export default Employees;
