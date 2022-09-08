



import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import call from "react-native-phone-call";
import axios from "axios";
import React, { useState, useEffect } from "react";
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

const Employees = ({ navigation, route }) => {
  const [AllEmployees, setAllEmployees] = useState([]);
  const [changeData, setChangeData] = useState(false);

  var ananymous = require("../../../assets/profile.png"); // In case Employee does't upload picture
  var user = route.params.user; //All user data

  useEffect(() => {
    axios
      .get(
        `http://${ip}:3000/api/employee/getAllEmployeesByUserId/${user.userId}` // Get All employees belonging to specific user from back
      )
      .then((result) => {
        setAllEmployees(result.data[1]);
      });
  }, [changeData]);

  return (
    <View>
      <View>
        <Text>Employees</Text>
      </View>
      <Button title="back" onPress={() => navigation.goBack()} />
      <Button //Add New Employee Butoon
        title="add"
        onPress={() =>
          navigation.navigate("addEmployee", {
            user: user,
            setChangeData: setChangeData,
            changeData: changeData,
          })
        }
      />
      <ScrollView>
        {AllEmployees.map(
          (
            elem,
            index //mapping through all employees (Please check figma )
          ) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("StackEmployees", {
                    screen: "Employee",
                    params: { elem: elem },
                  })
                }
              >
                <Text>{elem.employeeName}</Text>
                <Button //Call employee (Please follow figma for style and position)
                  title="Call"
                  onPress={(makeCall) =>
                    call({
                      number: elem.employeeTel.toString(), // String value with the number to call
                      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
                      skipCanOpen: true, // Skip the canOpenURL check
                    })
                  }
                />

                <Image //Employee picture (Follow Figma for position)
                  source={
                    elem.employeePicture
                      ? { uri: elem.employeePicture }
                      : ananymous
                  }
                  style={{ width: 200, height: 200 }}
                />
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
};

export default Employees;
