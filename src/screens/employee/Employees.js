import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import call from "react-native-phone-call";
import { Button, SocialIcon } from "react-native-elements";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../../styles/styleEmployee";
import Ionicons from "react-native-vector-icons/Ionicons";
import ip from "../../constant/ip";
import { Icon } from "react-native-elements/dist/icons/Icon";
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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            {/* <TouchableOpacity
            style={styles.backButton}
            title="back"
            onPress={() => navigation.goBack()}
          >
          <Ionicons 
          name="add-outline"
                  size={28}
                  color={"#023047"}
                  style={styles.icon}
          />
          </TouchableOpacity> */}
            {/* <View style={styles.addButton}> */}
            <TouchableOpacity
              //Add New Employee Butoon
              style={styles.addButton}
              title="add an employee"
              onPress={() =>
                navigation.navigate("addEmployee", {
                  user: user,
                  setChangeData: setChangeData,
                  changeData: changeData,
                })
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: 120,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#FFF" }}>Add new emplpoyee</Text>
                <Ionicons
                  name="add-outline"
                  size={28}
                  color={"white"}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
            {/* </View> */}
          </View>
          <View style={styles.body}>
            <View>
              {AllEmployees.map(
                (
                  elem,
                  index //mapping through all employees (Please check figma )
                ) => (
                  <View style={styles.box}>
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        navigation.navigate("StackEmployees", {
                          screen: "Employee",
                          params: { elem: elem },
                        })
                      }
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View>
                          <Image //Employee picture (Follow Figma for position)
                            source={
                              elem.employeePicture
                                ? { uri: elem.employeePicture }
                                : ananymous
                            }
                            style={{ width: 60, height: 60, margin: 6 }}
                          />
                        </View>
                        <View>
                          <Text
                            style={{ color: "white", left: 60, fontSize: 36 }}
                          >
                            {elem.employeeName}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity //Call employee (Please follow figma for style and position)
                      style={styles.callButton}
                      onPress={(makeCall) =>
                        call({
                          number: elem.employeeTel.toString(), // String value with the number to call
                          prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
                          skipCanOpen: true, // Skip the canOpenURL check
                        })
                      }
                    >
                      <Ionicons
                        name="call-outline"
                        size={36}
                        color={"white"}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                )
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Employees;
