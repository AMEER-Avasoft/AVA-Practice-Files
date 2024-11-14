import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import React from "react";
import HomeScreen from "./Src/Pages/Screen1/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigation from "./Src/Navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [loaded, error] = useFonts({
    "poppins-regular": Poppins_400Regular,
    "poppins-bold": Poppins_700Bold,
    "poppins-medium": Poppins_500Medium,
    "poppins-semibold": Poppins_600SemiBold,
  });

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <GestureHandlerRootView>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>


      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
