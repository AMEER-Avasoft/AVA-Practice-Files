import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FileUploadScreen from "../Pages/FileUploadScreen/FileUploadScreen";
import HomeScreen from "../Pages/Screen2/HomeScreen";
import { getHeightEquivalent } from "../Helpers/Utilities/Utilities";
const RootNavigation = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="TabNavigation" component={TabNavigation} />
      <MainStack.Screen name="HomeScreen" component={FileUploadScreen} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;

const TabNavigation = () => {
  const MainTab = createBottomTabNavigator();
  return (
    <MainTab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        keyboardHidesTabBar: true
      }}
      screenOptions={{
        // keyboardHidesTabBar: true,
        headerShown: false,
        tabBarStyle: {
          height: getHeightEquivalent(73),
          backgroundColor: "#363636",
          borderColor: "transparent",
          alignItems: "center",
          //justifyContent:'center'
        },
      }}
    >
      <MainTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <></>;
          },
        }}
      />
    </MainTab.Navigator>
  );
};
