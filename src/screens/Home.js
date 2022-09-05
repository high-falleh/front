import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "../styles/style";
import { Button, SocialIcon } from "react-native-elements";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.header}>
          <Image
          source={require("../../assets/user.png")}
          onPress={()=> navigation.navigate("Profil")}
          title="Profil"
          style={styles.profilIcon}
          />
          <Button buttonStyle={styles.disconnectButton} title="Disconnect"/>
          </View>
         <View style={styles.body}>

         
          <View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "default" }]}
              onPress={() => navigation.navigate("employees")}
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
