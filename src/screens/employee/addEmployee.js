import { View, Text, Button, TextInput, Image } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/styleAuth";
import * as ImagePicker from "expo-image-picker";
import { AdvancedImage } from '@cloudinary/react'
import {CloudinaryImage} from '@cloudinary/url-gen';
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
  const [employeePicture, setEmployeePicture] = useState("");

  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [image64, setImage64] = useState(null);

  const [image, setImage] = useState(null);
  const pickImage = async () => {  
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      includeBase64:true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      setImage(result.uri);
      setResult(result)
  
    }}

  const newEmployee = () => {
    if (!employeeName || !employeeTel || !employeeSalary) {
      setMessage("Please insert all the informations");
      return;
    } else {
      if (image) {
        console.log(image,'image');
        var _CLOUD_NAME = "dova8kprm";
        var _UPLOAD_PRESET = "riadhsaad";
        const formData = new FormData();
        formData.append("file", {
          uri: result.uri,
          name: result.uri.split("/").pop(),
          type: result.type, // image.type returns 'image' but mime.getType(image.uri) returns 'image/jpeg' or whatever is the type
        });
        formData.append('upload_preset', _UPLOAD_PRESET);
        formData.append('cloud_name',_CLOUD_NAME)
        console.log("image", formData);
        axios
          .post(
            `https://api.cloudinary.com/v1_1/${_CLOUD_NAME}/image/upload`,
            formData
          )
          .then((result) => {
            console.log(result.data, "cloudinary");
          setEmployeePicture(result.data.url);
          let x= result.data.url
          console.log("EMPLOYEE PIC",x);
            axios
              .post(`http://${ip}:3000/api/employee/addNewEmployee`, {
                userId: user.userId,
                employeeName: employeeName,
                employeeTel: employeeTel,
                employeeSalary: employeeSalary,
                employeePicture: x,
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
            source={{ uri: result.uri }}
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
