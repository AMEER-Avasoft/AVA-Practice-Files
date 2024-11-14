import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { appSvg } from "../../Assets/Images/appsvg";
import { SvgXml } from "react-native-svg";
import React, { FC } from "react";
import { styles } from "./PasswordScreenStyles";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import usePasswordScreenVM from "./PasswordScreenVM";
const PasswordScreen = ({ navigation, route }: PasswordScreenProps) => {
  const { type } = route.params;
  const { navigateToEmailScreen, navigateToPasswordSuccessScreen } =
    usePasswordScreenVM({ navigation, route });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <SvgXml xml={appSvg} height={"100%"} width={"100%"}></SvgXml>
      </View>
      <View style={styles.titleContainer}>
        {type === "forgot" ? (
          <Text style={styles.title}>Forgot Password</Text>
        ) : (
          <Text style={styles.title}>Sign In</Text>
        )}
      </View>
      {type === "forgot" ? (
        <View style={styles.inputContainer}>
          <View style={styles.inTextContainer}>
            <Text style={styles.inputText}>Email ID</Text>
            <Text style={styles.hash}>*</Text>
          </View>
          <View style={[styles.inputBox]}>
            <TextInput
              onChange={() => null}
              // onChangeText={(text) =>
              //   signInScreenVM.onChangeTextUpdate(text, "Email")
              // }
              // onBlur={() =>
              //   signInScreenVM.usernameValidation(
              //     signInScreenVM.userDetails.current.username
              //   )
              // }
              placeholder="Enter your Email ID"
              placeholderTextColor="#C0C0C0"
              style={styles.textInput}
            ></TextInput>
          </View>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <View style={styles.inTextContainer}>
              <Text style={styles.inputText}>New Password</Text>
              <Text style={[styles.hash]}>*</Text>
            </View>
            <View style={[styles.inputBox]}>
              <TextInput
                //onFocus={() => checkfocus('Email')}
                //onChangeText={text => onChangeTextUpdate(text, 'Email')}
                //onBlur={() => usernameValidation(userDetails.current.username)}
                placeholder="Enter your Password"
                placeholderTextColor="#C0C0C0"
                style={[styles.textInput, { width: getWidthEquivalent(314) }]}
              ></TextInput>
              <Image
                style={styles.eyeContainer}
                source={require("../../Assets/Images/eyeOpened.png")}
              ></Image>
            </View>
          </View>
          <View
            style={[
              styles.inputContainer,
              { marginTop: getHeightEquivalent(41) },
            ]}
          >
            <View style={styles.inTextContainer}>
              <Text style={styles.inputText}>Confirm Password</Text>
              <Text style={[styles.hash]}>*</Text>
            </View>
            <View style={[styles.inputBox]}>
              <TextInput
                //onFocus={() => checkfocus('Email')}
                //onChangeText={text => onChangeTextUpdate(text, 'Email')}
                //onBlur={() => usernameValidation(userDetails.current.username)}
                placeholder="Re-enter Password"
                placeholderTextColor="#C0C0C0"
                style={[styles.textInput, { width: getWidthEquivalent(314) }]}
              ></TextInput>
              <Image
                style={styles.eyeContainer}
                source={require("../../Assets/Images/eyeOpened.png")}
              ></Image>
            </View>
          </View>
        </>
      )}
      <TouchableOpacity
        onPress={
          type === "forgot"
            ? navigateToEmailScreen
            : navigateToPasswordSuccessScreen
        }
        style={styles.button}
      >
        {type === "forgot" ? (
          <Text style={styles.buttonText}>Send</Text>
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </TouchableOpacity>
      {type === "forgot" && (
        <TouchableOpacity
          onPress={() => navigation.navigate("SignInScreen")}
          style={styles.whiteButton}
        >
          <Text
            style={styles.whiteText}
          >
            Back to Sign In
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PasswordScreen;
