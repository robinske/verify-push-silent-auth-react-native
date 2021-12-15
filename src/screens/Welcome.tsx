import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import commonStyles from "../styles/common-styles";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { silentAuthorization } from "../api/verify";

const Welcome = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Spinner
        visible={spinner}
        textContent={"Verifying..."}
        textStyle={commonStyles.spinnerTextStyle}
      />
      <Image
        style={styles.logo}
        source={require("../../assets/owl-bank.png")}
      />
      <TouchableOpacity
        style={{ backgroundColor: "#36D576", ...styles.button }}
        onPress={() => {
          setSpinner(true);

          AsyncStorage.getItem("@factor_sid")
            .then((factorSid) =>
              silentAuthorization(factorSid).then((approved) => {
                setSpinner(false);
                if (approved) {
                  navigation.navigate("Gated");
                }
              })
            )
            .catch((e) => {
              setSpinner(false);
              console.error(e);
              navigation.replace("PhoneNumber");
            });
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
