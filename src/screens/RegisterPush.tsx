import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import commonStyles from "../styles/common-styles";
import Spinner from "react-native-loading-spinner-overlay";

const RegisterPush = ({ route, navigation }) => {
  // TODO add view and register device as a secure key
  return (
    <SafeAreaView>
      <Text>TODO</Text>
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
