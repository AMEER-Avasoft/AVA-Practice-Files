import React from "react";
import { StatusBar, View } from "react-native";
import MainStackScreen from "./Src/Navigation/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import SummaryScreen from "./Src/DummyScreens/SummaryScreen";
SplashScreen.preventAutoHideAsync();
const App = () => {
  const [loaded, error] = useFonts({
    "Greycliffcf-regular": require("./assets/fonts/Greycliffcf-regular.otf"),
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
      <StatusBar barStyle="dark-content" backgroundColor="#ffff"></StatusBar>
      <GestureHandlerRootView>
        {/* <MainStackScreen /> */}
        {/* <View style={{flex:1}}></View> */}
        <SummaryScreen></SummaryScreen>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
