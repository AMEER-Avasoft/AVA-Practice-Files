import { Text, View, Image, SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./HomeScreenStyles";
import * as Progress from "react-native-progress";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { height } from "../../Helpers/Constants/AppConstants";
interface cardBO {
  title: string;
  icon: any;
  time: string;
  date: string;
  description: string;
  amount: number;
  type: string;
}
const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState<string>("Daily");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const data: cardBO[] = [
    {
      title: "Salary",
      icon: require("../../Assets/Images/greencash.png"),
      time: "09:00",
      date: "May 15",
      description: "Monthly",
      amount: 3500.0,
      type: "income",
    },

    {
      title: "Groceries",
      icon: require("../../Assets/Images/grocery.png"),
      time: "14:30",
      date: "May 16",
      description: "Supermarket",
      amount: 125.5,
      type: "expense",
    },

    {
      title: "Freelance",
      icon: require("../../Assets/Images/key.png"),
      time: "11:45",
      date: "May 17",
      description: "Project",
      amount: 750.0,
      type: "income",
    },

    {
      title: "Dining",
      icon: require("../../Assets/Images/key.png"),
      time: "19:20",
      date: "May 18",
      description: "Restaurant",
      amount: 85.75,
      type: "expense",
    },

    {
      title: "Gas",
      icon: require("../../Assets/Images/bell.png"),
      time: "15:15",
      date: "May 19",
      description: "Fuel",
      amount: 45.25,
      type: "expense",
    },
    {
      title: "Salary",
      icon: require("../../Assets/Images/greencash.png"),
      time: "09:00",
      date: "May 15",
      description: "Monthly",
      amount: 3500.0,
      type: "income",
    },

    {
      title: "Groceries",
      icon: require("../../Assets/Images/grocery.png"),
      time: "14:30",
      date: "May 16",
      description: "Supermarket",
      amount: 125.5,
      type: "expense",
    },

    {
      title: "Freelance",
      icon: require("../../Assets/Images/key.png"),
      time: "11:45",
      date: "May 17",
      description: "Project",
      amount: 750.0,
      type: "income",
    },

    {
      title: "Dining",
      icon: require("../../Assets/Images/key.png"),
      time: "19:20",
      date: "May 18",
      description: "Restaurant",
      amount: 85.75,
      type: "expense",
    },

    {
      title: "Gas",
      icon: require("../../Assets/Images/bell.png"),
      time: "15:15",
      date: "May 19",
      description: "Fuel",
      amount: 45.25,
      type: "expense",
    },
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <View style={styles.headContainer}>
          <View
            style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Text style={styles.headText1}>Hi, Welcome Back</Text>
            <Text style={styles.headText2}>Good Morning</Text>
          </View>
          <View style={styles.notificationContainer}>
            <Image
              style={{
                height: getHeightEquivalent(18.86),
                width: getWidthEquivalent(14.57),
              }}
              source={require("../../Assets/Images/bell.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: getHeightEquivalent(12),
                  width: getHeightEquivalent(12),
                }}
                source={require("../../Assets/Images/up.png")}
              ></Image>
              <Text style={styles.bodyText1}>Total Balance</Text>
            </View>
            <Text style={styles.balanceText}>$7,783.00</Text>
          </View>
          <View style={styles.divider}></View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: getHeightEquivalent(12),
                  width: getHeightEquivalent(12),
                }}
                source={require("../../Assets/Images/down.png")}
              ></Image>
              <Text style={styles.bodyText1}>Total Expense</Text>
            </View>
            <Text style={[styles.balanceText, { color: "#0068FF" }]}>
              -$1.187.40
            </Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText1}>30%</Text>
          <View style={styles.inProgressContainer}>
            <Text style={styles.progressText2}>$20,000.00</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: getHeightEquivalent(10),
            marginLeft: getWidthEquivalent(61),
            alignSelf: "flex-start",
          }}
        >
          <Image
            style={{
              height: getHeightEquivalent(11),
              width: getHeightEquivalent(11),
              alignSelf: "center",
            }}
            source={require("../../Assets/Images/tickbox.png")}
          ></Image>
          <Text style={styles.descriptionText}>
            30% of your expenses, looks good.
          </Text>
        </View>
      </View>
      <BottomSheet
        handleComponent={() => null}
        enableContentPanningGesture
        snapPoints={[getHeightEquivalent(610), "93%"]}
        ref={bottomSheetRef}
        backgroundStyle={{
          backgroundColor: "#F1FFF3",
        }}
        //onChange={handleSheetChanges}
        style={styles.subContainer2}
      >
        <View style={styles.boardContainer}>
          <View style={styles.inOneContainer}>
            <Progress.Circle
              size={56} // Replace this with the actual size you need
              progress={0.5} // Replace this with the current progress
              thickness={3.25} // Adjust the thickness of the progress bar
              color="#0068FF" // Replace with your desired progress color
              unfilledColor="#F1FFF3" // Replace with your desired background color of the unfilled part
              borderWidth={0} // Remove border
              showsText={false} // Set to true if you want to show progress text
              // You can customize this style to adjust the positioning and other aspects
            >
              <Image
                style={{
                  height: getHeightEquivalent(21.75),
                  width: getWidthEquivalent(37.57),
                  position: "absolute",
                  top: getHeightEquivalent(16),
                  left: getWidthEquivalent(12),
                }}
                source={require("../../Assets/Images/Car.png")}
              ></Image>
              <Text style={styles.progressText}>Savings on goals</Text>
            </Progress.Circle>
          </View>
          <View style={styles.boardDivider2}></View>
          <View style={styles.inTwoContainer}>
            <View style={{ flexDirection: "row" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: getWidthEquivalent(31),
                  height: getHeightEquivalent(28),
                }}
                source={require("../../Assets/Images/cash.png")}
              ></Image>
              <View style={{ marginLeft: getWidthEquivalent(12) }}>
                <Text style={styles.boardText1}>Revenue Last Week</Text>
                <Text style={styles.boardText2}>$4.000.00</Text>
              </View>
            </View>
            <View style={styles.boardDivider1}></View>
            <View style={{ flexDirection: "row" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: getWidthEquivalent(19.14),
                  height: getHeightEquivalent(34.06),
                }}
                source={require("../../Assets/Images/fork.png")}
              ></Image>
              <View style={{ marginLeft: getWidthEquivalent(22.86) }}>
                <Text style={styles.boardText1}>Food Last Week</Text>
                <Text style={[styles.boardText2, { color: "#0068FF" }]}>
                  -$100.00
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.topNav}>
          <TouchableOpacity
            onPress={() => {
              setActiveTab("Daily");
            }}
            style={
              activeTab === "Daily" ? styles.activeTab : styles.inactiveTab
            }
          >
            <Text style={styles.tabText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab("Weekly");
            }}
            style={
              activeTab === "Weekly" ? styles.activeTab : styles.inactiveTab
            }
          >
            <Text style={styles.tabText}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab("Monthly");
            }}
            style={
              activeTab === "Monthly" ? styles.activeTab : styles.inactiveTab
            }
          >
            <Text style={styles.tabText}>Monthly</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ marginTop: getHeightEquivalent(10) }}
          showsVerticalScrollIndicator={false}
        >
          {data.map((data, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.cardContainer,
                  { marginTop: index === 0 ? 0 : getHeightEquivalent(24) },
                ]}
              >
                <View style={styles.logoContainer}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: getHeightEquivalent(25),
                      width: getWidthEquivalent(25),
                    }}
                    source={data.icon}
                  ></Image>
                </View>
                <View>
                  <Text style={styles.cardText1}>{data.title}</Text>
                  <Text style={styles.cardText2}>
                    {data.time} - {data.date}
                  </Text>
                </View>
                <View style={styles.cardDivider}></View>
                <View style={{ width: getWidthEquivalent(60) }}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.cardText3}
                  >
                    {data.description}
                  </Text>
                </View>

                <View style={styles.cardDivider}></View>
                <Text
                  style={[
                    styles.cardText4,
                    {
                      color: data.type === "expense" ? "#0068FF" : "#052224",
                    },
                  ]}
                >
                  {data.type === "expense" ? "-" : null}${data.amount}
                </Text>
              </View>
            );
          })}
          <View style={{ height: getHeightEquivalent(118) }}></View>
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;
