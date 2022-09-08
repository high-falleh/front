import { View, Text, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import axios from "axios";
// import styles from "../../styles/styleAuth";
import styles from "../../styles/styleEmployee";
import ip from "../../constant/ip";
import mime from "mime";

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
        formData.append("image", {
          uri: image.uri,
          name: image.uri.split("/").pop(),
          type: mime.getType(image.uri), // image.type returns 'image' but mime.getType(image.uri) returns 'image/jpeg' or whatever is the type
        });
        formData.append("upload_preset", "ehzqyvxt");
        console.log("image", formData);
        axios
          .post(
            "http://api.cloudinary.com/v1_1/brahamtahar/image/upload",
            formData
          )
          .then((result) => {
            console.log(result.data, "cloudinary");
            let employeePicture = result.data.url;
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
          })
          .catch((err) => console.log(err, "our err"));
      } else {
        axios
          .post(`http://${ip}:3000/api/employee/addNewEmployee`, {
            userId: user.userId,
            employeeName: employeeName,
            employeeTel: employeeTel,
            employeeSalary: employeeSalary,
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
      }
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
      <View>
        <Button
          title="Pick an image from camera roll"
          onPress={() => pickImage()}
        />
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
      <Button title="Save" onPress={() => newEmployee()} />

      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddEmployee;
