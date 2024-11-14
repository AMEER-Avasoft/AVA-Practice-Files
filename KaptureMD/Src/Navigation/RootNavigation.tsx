import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import SignInScreen from "../Pages/SignInScreen/SignInScreen";
import SignUpScreen from "../Pages/SignUpScreen/SignUpScreen";
import PasswordScreen from "../Pages/PasswordScreen/PasswordScreen";
import { NavigationContainer } from "@react-navigation/native";
import PasswordSuccessScreen from "../Pages/PasswordSuccessScreen/PasswordSuccessScreen";
import EmailScreen from "../Pages/EmailScreen/EmailScreen";
import SuccessScreen from "../Pages/SuccessScreen/SuccessScreen";
const MainStack = createNativeStackNavigator();

const MainStackScreen: FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="SignInScreen" component={SignInScreen} />
        <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <MainStack.Screen name="PasswordScreen" component={PasswordScreen} />
        <MainStack.Screen
          name={"PasswordSuccessScreen"}
          component={PasswordSuccessScreen}
        />
        <MainStack.Screen name="SuccessScreen" component={SuccessScreen} />
        <MainStack.Screen name="EmailScreen" component={EmailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackScreen;
