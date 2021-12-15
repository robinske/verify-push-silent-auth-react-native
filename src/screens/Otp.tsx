import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, Text } from "react-native";
import commonStyles from "../styles/common-styles";

import { checkVerification } from "../api/verify";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [invalidCode, setInvalidCode] = useState(false);
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
      <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          checkVerification(phoneNumber, code).then((success) => {
            if (!success) setInvalidCode(true);
            success && navigation.replace("RegisterPush", { phoneNumber });
          });
        }}
      />
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: "black",
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  error: {
    color: "red",
  },
});

export default Otp;
