import React, { useState, useRef } from "react";

const useSignInScreenVM = ({ navigation, route }: SignInScreenProps) => {
  const [isError, setIsError] = useState<ErrorBO>();
  const userDetails = useRef<CredBO>({ username: "", password: "" });
  const usernameValidation = (username: string) => {
    try {
      const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (reg.test(username)) {
        setIsError((prevState) => ({
          ...prevState,
          isUsernameValid: true,
        }));
        userDetails.current.username = username;
      } else {
        setIsError((prevState) => ({
          ...prevState,
          isUsernameValid: false,
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const passwordValidation = (password: string) => {
    try {
      const reg2 =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|-]{8,}$/;

      if (reg2.test(password)) {
        setIsError((prevState) => ({
          ...prevState,
          isPasswordValid: true,
        }));

        userDetails.current.password = password;
      } else {
        setIsError((prevState) => ({
          ...prevState,
          isPasswordValid: false,
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onPressSignUp = (): void => {
    try {
      navigation.navigate("SignUpScreen");
    } catch (e) {
      console.log(e);
    }
  };
  const onChangeTextUpdate = (text: string, type: string): void => {
    try {
      if (type === "Email") {
        userDetails.current.username = text;
      } else {
        userDetails.current.password = text;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const navigateToForgotScreen = (): void => {
    try {
      navigation.navigate("PasswordScreen", { type: "forgot" });
    } catch (e) {
      console.log(e);
    }
  };
  const navigateToSignUpScreen = (): void => {
    try {
      navigation.navigate("SignUpScreen");
    } catch (e) {
      console.log(e);
    }
  };
  const navigateToSuccessScreen = (): void => {
    try {
      navigation.navigate("SuccessScreen");
    } catch (e) {
      console.log(e);
    }
  };
  return {
    isError,
    userDetails,
    navigateToSuccessScreen,
    navigateToSignUpScreen,
    usernameValidation,
    onPressSignUp,
    passwordValidation,
    onChangeTextUpdate,
    navigateToForgotScreen,
  };
};

export default useSignInScreenVM;
