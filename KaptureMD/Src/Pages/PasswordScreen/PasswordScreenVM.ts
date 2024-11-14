import { View, Text } from "react-native";
import React from "react";

const usePasswordScreenVM = ({ navigation, route }: PasswordScreenProps) => {
  const navigateToEmailScreen = () => {
    try {
      navigation.navigate("EmailScreen");
    } catch (e) {
      console.log("Error", e);
    }
  };
  const navigateToPasswordSuccessScreen = () => {
    try {
      navigation.navigate("PasswordSuccessScreen");
    } catch (e) {
      console.log("Error", e);
    }
  };
  return { navigateToEmailScreen, navigateToPasswordSuccessScreen };
};
export default usePasswordScreenVM;
