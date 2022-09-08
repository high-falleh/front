



import { View, Text, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/styleAuth";
import pickImage from "../../camera";
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

const AddEmployee = ({ navigation, route }) => {
  var user = route.params.user;

  const [employeeName, setEmployeeName] = useState("");
  const [employeeTel, setEmployeeTel] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");
  const [message, setMessage] = useState("");

  const [image, setImage] = useState(null);

  const newEmployee = () => {
    if (!employeeName || !employeeTel || !employeeSalary) {
      setMessage("Please insert all the informations");
      return;
    } else {
      if (image) {
        const formData = new FormData();
        formData.append("file", {
          uri: image.uri,
          name: image.uri.split("/").pop(),
          type: image.type,
        });
        formData.append("upload_preset", "nt1uphup");
        console.log("image", formData);
        axios
          .post("http://api.cloudinary.com/v1_1/magico/image/upload", formData)
          .then((result) => {
            let employeePicture = result.data.url;

            console.log(result.data, "cloudinary");
            axios
              .post(`http://${ip}:3000/api/employee/addNewEmployee`, {
                userId: user.userId,
                employeeName: employeeName,
                employeeTel: employeeTel,
                employeeSalary: employeeSalary,
                employeePicture: employeePicture,
              })
              .then((result) => {
                console.log(result.data);
                route.params.setChangeData(!route.params.changeData);
                navigation.navigate("StackEmployees", {
                  screen: "employees",
                  params: { user: user },
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
      } else {
        axios
          .post(`http://${ip}:3000/api/employee/addNewEmployee`, {
            userId: user.userId,
            employeeName: employeeName,
            employeeTel: employeeTel,
            employeeSalary: employeeSalary,
          })
          .then((result) => {
            console.log(result);
            route.params.setChangeData(!route.params.changeData);
            navigation.navigate("StackEmployees", {
              screen: "employees",
              params: { user: user },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <View>
      <Text>AddEmployee</Text>
      <View>
        <Button
          title="Pick an image from camera roll"
          onPress={() => pickImage(setImage)}
        />
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
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
