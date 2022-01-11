import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import commonStyles from "../styles/common-styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { silentAuthorization } from "../api/verify";
import { useIsFocused } from "@react-navigation/native";

const Verifying = ({ navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log("effecting...");
    async function authorize() {
      console.log("authorizing...");
      AsyncStorage.getItem("@factor_sid")
        .then((factorSid) => {
          console.log(factorSid);
          silentAuthorization(factorSid).then((approved) => {
            if (approved) {
              console.log("approving...");
              navigation.navigate("Gated");
            }
          });
        })
        .catch((e) => {
          console.error(e);
          navigation.replace("PhoneNumber");
        });
    }

    authorize();
  }, [isFocused]);

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <Text style={commonStyles.message}>
        Using your device to verify this login...
      </Text>
    </SafeAreaView>
  );
};

export default Verifying;
