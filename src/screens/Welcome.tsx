import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import commonStyles from "../styles/common-styles";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Image
        style={styles.logo}
        source={require("../../assets/owl-bank.png")}
      />
      <TouchableOpacity
        style={{ backgroundColor: "#36D576", ...styles.button }}
        onPress={() => {
          // TODO add silent authorization
        }}
      >
        <Text style={commonStyles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#AEB2C1", ...styles.button }}
        onPress={() => navigation.replace("PhoneNumber")}
      >
        <Text style={commonStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 100,
    marginBottom: 100,
  },

  message: {
    fontSize: 16,
    paddingHorizontal: 30,
    textAlign: "center",
    marginBottom: 100,
  },

  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});

export default Welcome;
