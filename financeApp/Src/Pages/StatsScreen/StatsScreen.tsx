import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { styles } from "./StatsScreenStyles";

const StatsScreen = () => {
  const [activeTab, setActiveTab] = useState<string>("Daily");
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <View style={styles.headContainer}>
          <Image
            resizeMode="contain"
            style={{
              height: getHeightEquivalent(16),
              width: getWidthEquivalent(19),
            }}
            source={require("../../Assets/Images/whiteback.png")}
          ></Image>
          <Text style={styles.headText1}>Analysis</Text>
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
        backgroundStyle={{
          backgroundColor: "#F1FFF3",
        }}
        
        enableContentPanningGesture
        snapPoints={[getHeightEquivalent(610), "95%"]}
        ref={bottomSheetRef}
        //onChange={handleSheetChanges}
        style={styles.subContainer2}
      >
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
          <TouchableOpacity
            onPress={() => {
              setActiveTab("Year");
            }}
            style={activeTab === "Year" ? styles.activeTab : styles.inactiveTab}
          >
            <Text style={styles.tabText}>Year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.graphContainer}>
          <View style={styles.graphHeadConatiner}>
            <Text style={styles.graphHeadText}>income & Expenses</Text>
            <View style={styles.graphInContainer}>
              <Image
                style={{
                  height: getHeightEquivalent(16),
                  width: getHeightEquivalent(16),
                }}
                source={require("../../Assets/Images/search.png")}
              ></Image>
            </View>
            <View style={styles.graphInContainer}>
              <Image
                style={{
                  height: getHeightEquivalent(16),
                  width: getHeightEquivalent(16),
                }}
                source={require("../../Assets/Images/calander.png")}
              ></Image>
            </View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default StatsScreen;
