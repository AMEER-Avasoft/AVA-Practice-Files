import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./SignInScreenStyles";
import { appSvg } from "../../Assets/Images/appsvg";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import useSignInScreenVM from "./SignInScreenVM";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

const SignInScreen = ({ navigation, route }: SignInScreenProps) => {
  const {
    navigateToForgotScreen,
    navigateToSignUpScreen,
    navigateToSuccessScreen,
    userDetails,
    usernameValidation,
    passwordValidation,
  } = useSignInScreenVM({
    navigation,
    route,
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logo}>
        <SvgXml xml={appSvg} height={"100%"} width={"100%"}></SvgXml>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inTextContainer}>
          <Text style={styles.inputText}>Email ID</Text>
          <Text style={styles.hash}>*</Text>
        </View>
        <View style={[styles.inputBox]}>
          <TextInput
            onChangeText={(text) =>
              useSignInScreenVM.onChangeTextUpdate(text, "Email")
            }
            onBlur={() =>
              useSignInScreenVM.usernameValidation(
                useSignInScreenVM.userDetails.current.username
              )
            }
            placeholder="Enter your Email ID"
            placeholderTextColor="#C0C0C0"
            style={styles.textInput}
          ></TextInput>
        </View>
      </View>
      <View
        style={[styles.inputContainer, { marginTop: getHeightEquivalent(24) }]}
      >
        <View style={styles.inTextContainer}>
          <Text style={styles.inputText}>Password</Text>
          <Text style={[styles.hash]}>*</Text>
        </View>
        <View style={[styles.inputBox]}>
          <TextInput
            //onFocus={() => checkfocus('Email')}
            //onChangeText={text => onChangeTextUpdate(text, 'Email')}
            //onBlur={() => usernameValidation(userDetails.current.username)}
            placeholder="Enter your Password"
            secureTextEntry
            placeholderTextColor="#C0C0C0"
            style={[styles.textInput, { width: getWidthEquivalent(314) }]}
          ></TextInput>
          <Image
            style={styles.eyeContainer}
            source={require("../../Assets/Images/eyeOpened.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.forgotContainer}>
        <TouchableOpacity onPress={() => navigateToForgotScreen()}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigateToSuccessScreen();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.bottomContainer,
          useSafeAreaInsets().bottom === 0 && {
            marginBottom: getHeightEquivalent(37),
          },
        ]}
      >
        <Text style={styles.bottomText1}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigateToSignUpScreen()}>
          <Text style={styles.bottomText2}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
