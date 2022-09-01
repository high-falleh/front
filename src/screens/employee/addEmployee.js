import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/styleAuth";

const AddEmployee = ({ navigation, route }) => {
  var user = route.params.user.userId;
  // console.log(user.userId);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeTel, setEmployeeTel] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");
  const [message, setMessage] = useState("");

  const back=()=>{
    navigation.goBack()
  }

  const newEmployee = () => {
    if (!employeeName || !employeeTel || !employeeSalary) {
      setMessage("Please insert all the informations");
      return;
    } else {
      axios
        .post(`http://localhost:3000/api/employee/addNewEmployee`, {
          userId: user,
          employeeName: employeeName,
          employeeTel: employeeTel,
          employeeSalary: employeeSalary,
        })
        .then((result) => {
          console.log(result);
          back()
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View>
      <Text>AddEmployee</Text>
      <TextInput
        placeholder="Full Name"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        onChangeText={setEmployeeName}
      />
      <TextInput
        placeholder="Phone Number"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        onChangeText={setEmployeeTel}
      />
           <TextInput
        placeholder="Salary"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        onChangeText={setEmployeeSalary}
      />

      <Button title="Save" onPress={() => newEmployee()} />

      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddEmployee;
