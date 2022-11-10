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
        <View>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Text style={styles.numberEmployees}>Employees:{AllEmployees.length}</Text>
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
        </View>

        {AllEmployees.map(
          (
            elem,
            index //mapping through all employees (Please check figma )
          ) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("StackEmployees", {
                    screen: "Employee",
                    params: { employee: elem },
                  })
                }
              >
            <View key={index} style={styles.box}>
              <View style={{width:'30%'}}>

                <Image //Employee picture (Follow Figma for position)
                  source={
                    elem.employeePicture
                      ? { uri: elem.employeePicture }
                      : ananymous
                  }
                  style={{ width: 100, height: 100,borderBottomLeftRadius:10,borderTopLeftRadius:10 }}
                />
              </View>
              
                <View
                  style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:'65%',
                                     
                    margin: 10,
                    
                  }}
                >
                  <View style={{height:'100%', 
       justifyContent:'center',
       }}>
                    <Text style={{ fontSize: 20}}>
                      {elem.employeeName}
                      
                    </Text>
                    <Text style={{ fontSize: 10}}>
                      {elem.employeeName}
                      
                    </Text>
                  </View>
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
                      color={"green"}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
            </View>
              </TouchableOpacity>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Employees;
