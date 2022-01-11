import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import commonStyles from "../styles/common-styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { silentAuthorization } from "../api/verify";
import { useIsFocused } from "@react-navigation/native";

const Verifying = ({ navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    let verify = () =>
      AsyncStorage.getItem("@factor_sid")
        .then((factorSid) => {
          silentAuthorization(factorSid).then((approved) => {
            if (approved) {
              navigation.replace("Gated");
            }
          });
        })
        .catch((e) => {
          console.error(e);
          navigation.replace("PhoneNumber");
        });

    // enough time to briefly educate the user about what's happening
    let timeout = setTimeout(() => verify(), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Text style={commonStyles.message}>
        Using your device to verify this login attempt...
      </Text>
    </SafeAreaView>
  );
};

export default Verifying;
