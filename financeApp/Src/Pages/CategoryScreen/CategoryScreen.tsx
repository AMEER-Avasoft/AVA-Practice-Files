import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { styles } from "./CategoryScreenStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
interface OptionBO {
  title: string;
  icon: any;
}
const CategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Food");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const Data: OptionBO[] = [
    {
      title: "Food",
      icon: require("../../Assets/Images/whitefork.png"),
    },
    {
      title: "Transport",
      icon: require("../../Assets/Images/bus.png"),
    },
    {
      title: "Medicine",
      icon: require("../../Assets/Images/tablet.png"),
    },
    {
      title: "Groceries",
      icon: require("../../Assets/Images/grocery.png"),
    },
    {
      title: "Rent",
      icon: require("../../Assets/Images/key.png"),
    },
    {
      title: "Gifts",
      icon: require("../../Assets/Images/gift.png"),
    },
    {
      title: "Savings",
      icon: require("../../Assets/Images/save.png"),
    },
    {
      title: "Entertainment",
      icon: require("../../Assets/Images/ticket.png"),
    },
    {
      title: "More",
      icon: require("../../Assets/Images/more.png"),
    },
  ];
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
          <Text style={styles.headText1}>Categories</Text>
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
        <View style={styles.gridContainer}>
          {Data.map((value, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategory(value.title);
                }}
                key={index}
                style={[
                  styles.elementContainer,
                  { marginTop: index > 2 ? getWidthEquivalent(39) : 0 },
                ]}
              >
                <View
                  style={[
                    styles.IconContainer,
                    {
                      backgroundColor:
                        selectedCategory === value.title
                          ? "#0068FF"
                          : "#6DB6FE",
                    },
                  ]}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      height: getHeightEquivalent(50),
                      width: getWidthEquivalent(50),
                    }}
                    source={value.icon}
                  ></Image>
                </View>
                <Text style={styles.elementText}>{value.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default CategoryScreen;
