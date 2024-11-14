// screens/FirstScreen.tsx
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, Button, Text, BackHandler } from "react-native";


// screens/SecondScreen.tsx

export const SecondScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Second Screen</Text>
    </View>
  );
};

// screens/ThirdScreen.tsx

export const ThirdScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Third Screen</Text>
    </View>
  );
};

// screens/SeparateScreen.tsx

const SeparateScreen = ({ navigation }: any) => {
  //const navigation = useNavigation();
  //   useFocusEffect(
  //     // useCallback(():  => {
  //     //   const onBackPress = () :null=> {
  //     //     return handleGoBack();
  //     //   };

  //       BackHandler.addEventListener("hardwareBackPress", handleGoBack);

  //       return () =>
  //         BackHandler.removeEventListener("hardwareBackPress", handleGoBack);
  //     )},
  //     //  [])
  //   );
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return handleGoBack();
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  const handleGoBack = () => {
    navigation.navigate("BottomTabs", { screen: "Second" });
    return undefined;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Go Back to Second Screen" onPress={handleGoBack} />
    </View>
  );
};

export default SeparateScreen;
