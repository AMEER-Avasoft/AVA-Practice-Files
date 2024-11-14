import { View, Text } from "react-native";
import React from "react";

const useEmailScreenVM = ({navigation,route}:EmailScreenProps) => {
  const navigateToPasswordScreen = (): void => {
    try {
        navigation.navigate("PasswordScreen", { type: "reset" });
    } catch (e) {
      console.log(e);
    }
  };
  return {navigateToPasswordScreen};
};

export default useEmailScreenVM;
