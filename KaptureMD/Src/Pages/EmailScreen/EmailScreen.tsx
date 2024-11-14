import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { appSvg } from "../../Assets/Images/appsvg";
import { styles } from "./EmailScreenStyles";
import useEmailScreenVM from "./EmailScreenVM";

const EmailScreen = ({ navigation, route }: EmailScreenProps) => {
  const { navigateToPasswordScreen } = useEmailScreenVM({ navigation, route });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logo}>
        <SvgXml xml={appSvg} height={"100%"} width={"100%"}></SvgXml>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>
          Please check your email that you created your account with.
        </Text>
        <Text style={styles.description1}>
          Remember to check your spam folder if you cannot find the email in
          your inbox.
        </Text>
        <View style={styles.linkContainer}>
          <Text style={styles.description2}>
            Did you not receive the email?{" "}
          </Text>
          <Text style={styles.descriptionLink}>Resend email</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigateToPasswordScreen();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmailScreen;
