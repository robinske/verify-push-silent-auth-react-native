import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import commonStyles from "../styles/common-styles";
import Spinner from "react-native-loading-spinner-overlay";

import { createFactor } from "../api/verify";

const RegisterPush = ({ route, navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const { phoneNumber } = route.params;
  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Spinner
        visible={spinner}
        textContent={"One moment..."}
        textStyle={commonStyles.spinnerTextStyle}
      />
      <Text style={commonStyles.prompt}>
        Secure your account with this device?
      </Text>
      <Text style={commonStyles.message}>
        {`Whenever there's a new login, we'll send a notification to this phone. It's safer than a text message and you can instantly approve or deny access.`}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: "#36D576", ...styles.button }}
        onPress={() => {
          setSpinner(true);
          createFactor(phoneNumber)
            .then(() => {
              setSpinner(false);
              navigation.replace("Gated");
            })
            .catch((e) => {
              console.error(e);
            });
        }}
      >
        <Text style={commonStyles.buttonText}>Yes, use this device</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#AEB2C1", ...styles.button }}
        onPress={() => console.log("skipping push registration")}
      >
        <Text style={commonStyles.buttonText}>Not now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});

export default RegisterPush;
