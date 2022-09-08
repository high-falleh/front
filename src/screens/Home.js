import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
// =======
// import { Text, View, Image } from "react-native";
// >>>>>>> 07cad65e0e35fd712bdae4b29c4f272f49ce5e5b
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
  console.log(route.params.user, "This is home");

  var user = route.params.user;
  const signOut = () => {
    route.params.setUser(null);
    AsyncStorage.removeItem("user");
  };
  return (
    <SafeAreaView>
      <ScrollView endFillColor={true}>
        <View style={styles.container}>
        <Text style={styles.title}>Welcome {user.userFullName}</Text>
          <View style={styles.header}>
            <Image
              source={require("../../assets/user.png")}
              onPress={() => navigation.navigate("Profil")}
              title="Profil"
              style={styles.profilIcon}
            />
            <Button
              buttonStyle={styles.disconnectButton}
              title="Disconnect"
              onPress={signOut}
            />
          </View>
          <View style={styles.body}>
            <View>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "default" }]}
                onPress={() =>
                  navigation.navigate("StackEmployees", {
                    screen: "employees",
                    params: { user: user },
                  })
                }
                title="Employees"
              >
                <View>
                  <Image
                    source={require("../../assets/team.png")}
                    style={styles.icon}
                    size={26}
                  />
                  <Text style={styles.tileTitle}>Employees</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("animals")}
                title="Animals"
              >
                <View>
                  <Image
                    source={require("../../assets/animalspng.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>Animals</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("plants")}
                title="Plants"
              >
                <View>
                  <Image
                    source={require("../../assets/plant.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>Plants</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("vehicles")}
                title="vehicles"
              >
                <View>
                  <Image
                    source={require("../../assets/tractor.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>vehicles</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("factures")}
                title="Factures"
              >
                <View>
                  <Image
                    source={require("../../assets/bill.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>Factures</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("transactions")}
                title="Transactions"
              >
                <View>
                  <Image
                    source={require("../../assets/transaction.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>Transactions</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("clients")}
                title="Clients"
              >
                <View>
                  <Image
                    source={require("../../assets/customer.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>Clients</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("suppliers")}
                title="Suppliers"
              >
                <View>
                  <Image
                    source={require("../../assets/packages.png")}
                    style={styles.icon}
                    size={30}
                  />
                  <Text style={styles.tileTitle}>Suppliers</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
