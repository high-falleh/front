import { Text, View } from "react-native";
import styles from "../styles/style";
import { Button, SocialIcon } from "react-native-elements";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <View style={styles.flex}>
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("employees")}
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
      </View>
    </View>
  );
};

export default Home;
