import { Text, View, Image } from "react-native";
import styles from "../styles/style";
import { Button, SocialIcon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   TeamWork makes the dream Work        //////////////////////////////////////////////////
/////////////////////////////////////////////////        Riadh & Khalil & Tahar          ///////////////////////////////////////////////////
////////////////////////////////////////////////              HighFalleh                ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Home = ({ navigation, route }) => {
  console.log(route.params, "This is home");

  var user = route.params.user;
  const signOut = () => {
    route.params.setUser(null);
    AsyncStorage.removeItem("user");
  };
  return (
    <View style={styles.box}>
      <Text>Home</Text>
      <View style={styles.flex}>
        <Button
          buttonStyle={styles.button}
          onPress={() =>
            navigation.navigate("StackEmployees", {
              screen: "employees",
              params: { user: user },
            })
          }
          title="Employees"
        />
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("animals")}
          title="Animals"
        />
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("plants")}
          title="Plants"
        />
      </View>
      <View style={styles.flex}>
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("vehicles")}
          title="Vehicles"
        />
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("factures")}
          title="Factures"
        />
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("transactions")}
          title="Transactions"
        />
      </View>
      <View style={styles.flex}>
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("clients")}
          title="Clients"
        />
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("suppliers")}
          title="Suppliers"
        />
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => signOut()}
          title="SignOut"
        />
      </View>
    </View>
  );
};

export default Home;
