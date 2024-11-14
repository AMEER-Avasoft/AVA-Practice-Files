import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Pages/Screen1/HomeScreen";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../Helpers/Utilities/Utilities";
import StatsScreen from "../Pages/StatsScreen/StatsScreen";
import TransferScreen from "../Pages/TransferScreen/TransferScreen";
import CategoryScreen from "../Pages/CategoryScreen/CategoryScreen";
import ProfileScreen from "../Pages/ProfileScreen/ProfileScreen";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: getWidthEquivalent(44),
          height: getHeightEquivalent(108),
          backgroundColor: "#DFF7E2",
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          position: "absolute",
        },
      }}
      initialRouteName="stats"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00D09E",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(31),
                    width: getWidthEquivalent(25),
                  }}
                  source={require("../Assets/Images/home.png")}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(31),
                    width: getWidthEquivalent(25),
                  }}
                  source={require("../Assets/Images/home.png")}
                ></Image>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00D09E",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(30),
                    width: getWidthEquivalent(31),
                  }}
                  source={require("../Assets/Images/stats.png")}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(30),
                    width: getWidthEquivalent(31),
                  }}
                  source={require("../Assets/Images/stats.png")}
                ></Image>
              </View>
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00D09E",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(25),
                    width: getWidthEquivalent(33),
                  }}
                  source={require("../Assets/Images/transfer.png")}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(25),
                    width: getWidthEquivalent(33),
                  }}
                  source={require("../Assets/Images/transfer.png")}
                ></Image>
              </View>
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00D09E",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(23),
                    width: getWidthEquivalent(27),
                  }}
                  source={require("../Assets/Images/share.png")}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(23),
                    width: getWidthEquivalent(27),
                  }}
                  source={require("../Assets/Images/share.png")}
                ></Image>
              </View>
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00D09E",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(27),
                    width: getWidthEquivalent(22),
                  }}
                  source={require("../Assets/Images/Profile.png")}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  height: getHeightEquivalent(57),
                  width: getHeightEquivalent(53),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 22,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    height: getHeightEquivalent(27),
                    width: getWidthEquivalent(22),
                  }}
                  source={require("../Assets/Images/Profile.png")}
                ></Image>
              </View>
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;
