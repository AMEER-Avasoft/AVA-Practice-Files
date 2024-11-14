import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { appSvg } from "../../Assets/Images/appsvg";
import { SvgXml } from "react-native-svg";
import { styles } from "./PasswordSuccessScreenStyles";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
const PasswordSuccessScreen = ({
  navigation,
  route,
}: PasswordSuccessScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <SvgXml xml={appSvg} height={"100%"} width={"100%"}></SvgXml>
      </View>

      <Image
        style={styles.tickLogo}
        source={require("../../Assets/Images/tick.png")}
      ></Image>
      <Text
        style={styles.headText}
      >
        Password Changed!
      </Text>
      <View style={{ width: getWidthEquivalent(311), alignItems: "center" }}>
        <Text style={styles.description}>
          Your password has been changed successfully.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignInScreen");
        }}
        style={{
          backgroundColor: "#457B9D",
          height: getHeightEquivalent(48),
          width: getWidthEquivalent(366),
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          marginTop: getHeightEquivalent(40),
        }}
      >
        <Text style={styles.buttonText}>
          Back to Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordSuccessScreen;
