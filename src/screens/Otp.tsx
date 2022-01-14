import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, Text } from "react-native";
import commonStyles from "../styles/common-styles";

import { checkVerification } from "../api/verify";
import OtpInputs from "react-native-otp-inputs";

const Otp = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [invalidCode, setInvalidCode] = useState(false);

  const inputLength = 6;
  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Text style={commonStyles.prompt}>Enter the code we sent you</Text>
      <Text style={commonStyles.message}>
        {`Your phone (${phoneNumber}) will be used to protect your account each time you log in.`}
      </Text>
      <Button
        title="Edit Phone Number"
        onPress={() => navigation.replace("PhoneNumber")}
      />
      <OtpInputs
        placeholder="7"
        style={styles.otpForm}
        inputStyles={styles.otpText}
        inputContainerStyles={styles.pinContainer}
        selectTextOnFocus={true}
        numberOfInputs={inputLength}
        handleChange={(code) => {
          if (code.length === inputLength) {
            checkVerification(phoneNumber, code).then((success) => {
              if (!success) setInvalidCode(true);

              success && navigation.replace("RegisterPush", { phoneNumber });
            });
          }
        }}
      />
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  otpForm: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  otpText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },

  pinContainer: {
    width: 30,
    height: 30,
    borderWidth: 0,
    borderBottomWidth: 1,
    margin: 10,
  },

  error: {
    color: "red",
  },
});

export default Otp;
