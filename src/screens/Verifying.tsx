import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import commonStyles from "../styles/common-styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { silentAuthorization } from "../api/verify";
import { useIsFocused } from "@react-navigation/native";

const Verifying = ({ navigation }) => {
  const isFocused = useIsFocused();

  // TODO

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Text style={commonStyles.message}>
        Using your device to verify this login attempt...
      </Text>
    </SafeAreaView>
  );
};

export default Verifying;
