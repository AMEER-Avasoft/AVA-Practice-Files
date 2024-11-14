import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import EncountersScreen from "./Src/Pages/EncountersScreen/EncountersScreen";
SplashScreen.preventAutoHideAsync();
const App = () => {
  const [loaded, error] = useFonts({
    "Greycliffcf-regular": require("./Src/Assets/fonts/GreycliffCf/Greycliffcf-regular.otf"),
    "Greycliffcf-bold": require("./Src/Assets/fonts/GreycliffCf/Greycliffcf-bold.otf"),
    "Greycliffcf-medium": require("./Src/Assets/fonts/GreycliffCf/Greycliffcf-medium.otf"),
    "Greycliffcf-light": require("./Src/Assets/fonts/GreycliffCf/Greycliffcf-light.otf"),
    "Greycliffcf-thin": require("./Src/Assets/fonts/GreycliffCf/Greycliffcf-thin.otf"),
    "Greycliffcf-demibold": require("./Src/Assets/fonts/GreycliffCf/Greycliffcf-demibold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <GestureHandlerRootView>
        <EncountersScreen></EncountersScreen>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
