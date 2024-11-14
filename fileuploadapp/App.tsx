// import { StyleSheet } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import FileUploadScreen from "./Src/Pages/FileUploadScreen/FileUploadScreen";
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <StatusBar style="auto" backgroundColor="#ffffff" />
//       <GestureHandlerRootView>
//         <FileUploadScreen></FileUploadScreen>
//       </GestureHandlerRootView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeparateScreen, {
  SecondScreen,
  ThirdScreen,
} from "./Src/Pages/Screen2/HomeScreen";
import { FirstScreen } from "./Src/Pages/Screen2/FirstScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={FirstScreen} />
      <Tab.Screen name="Second" component={SecondScreen} />
      <Tab.Screen name="Third" component={ThirdScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
        <Stack.Screen name="Separate" component={SeparateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
