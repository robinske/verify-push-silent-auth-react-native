import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import commonStyles from "../styles/common-styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PhoneInput from "react-native-phone-number-input";
import Spinner from "react-native-loading-spinner-overlay";

import { sendSmsVerification } from "../api/verify";

const PhoneNumber = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <View style={styles.container}>
        <Spinner
          visible={spinner}
          textContent={"Sending SMS..."}
          textStyle={commonStyles.spinnerTextStyle}
        />
        <SafeAreaView style={commonStyles.wrapper}>
          <View style={styles.welcome}>
            <Text>Welcome!</Text>
          </View>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            countryPickerProps={{ withAlphaFilter: true }}
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setSpinner(true);
              sendSmsVerification(formattedValue).then((sent) => {
                setSpinner(false);
                navigation.replace("Otp", { phoneNumber: formattedValue });
              });
            }}
          >
            <Text style={commonStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },

  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7CDB8A",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  welcome: {
    padding: 20,
  },

  status: {
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    color: "gray",
  },
});

export default PhoneNumber;
