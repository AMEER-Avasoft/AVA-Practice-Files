import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { styles } from "./SuccessScreenStyles";
import { SvgXml } from "react-native-svg";
import { appSvg } from "../../Assets/Images/appsvg";
import { SafeAreaView } from "react-native-safe-area-context";
const SuccessScreen = ({ navigation, route }: SuccessScreenProps) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logo}>
        <SvgXml xml={appSvg} height={"100%"} width={"100%"}></SvgXml>
      </View>
      <Image
        style={styles.tickPng}
        source={require("../../Assets/Images/tick.png")}
      ></Image>
      <Text style={styles.successText}>Account Created Successfully!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignInScreen");
        }}
        style={styles.buttonStyles}
      >
        <Text style={styles.button2Styles}>Back to Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SuccessScreen;
