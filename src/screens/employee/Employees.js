import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const Employees = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex:1, marginTop:20}}>
          <Text>Employees</Text>
          <Button title="back" onPress={() => navigation.goBack()} />
          <Button
            title="add"
            onPress={() => navigation.navigate("addEmployee")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Employees;
