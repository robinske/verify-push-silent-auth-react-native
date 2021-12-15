import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  prompt: {
    fontSize: 24,
    paddingHorizontal: 30,
    paddingBottom: 20,
    textAlign: "center",
  },

  message: {
    fontSize: 16,
    paddingHorizontal: 30,
    textAlign: "center",
    marginBottom: 100,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },

  spinnerTextStyle: {
    color: "white",
  },
});

export default commonStyles;
