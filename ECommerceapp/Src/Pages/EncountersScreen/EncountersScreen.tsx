import { View, Text, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./EncountersScreenStyles";
import { SvgXml } from "react-native-svg";
import { Vector } from "../../Assets/Images/Vector";
import { Dropdown } from "react-native-element-dropdown";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { share } from "../../Assets/Images/share";
import { file } from "../../Assets/Images/file";
import { filter } from "../../Assets/Images/filter";
import { downarrow } from "../../Assets/Images/downarrow";
import { dots } from "../../Assets/Images/dots";
import { calender } from "../../Assets/Images/calendar";
import { rightarrow } from "../../Assets/Images/rightarrow";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { plus } from "../../Assets/Images/plus";

interface cardBO {
  title: string;
  status: string;
  billingStatus: string;
  billingCode: string;
  date: string;
  time: string;
  description: string;
  creatorName: string;
}
const EncountersScreen = () => {
  const data: string[] = ["data1", "data2", "data3", "data4"];

  const cardData: cardBO[] = [
    {
      title: "Operative",
      status: "none",
      billingStatus: "Billed",
      billingCode: "99213, 14250, 13109, ...",
      date: "03/28/2024",
      time: "22:33",
      description: `Patient presenting with high fever, indicating a possible infection.${"\n"} Immediate attention and further`,
      creatorName: "Mckay Jessica (MD)",
    },
    {
      title: "Surgery",
      status: "Marked as Error",
      billingStatus: "Unbilled",
      billingCode: "99213, 14250, 13109, ...",
      date: "03/28/2024",
      time: "22:33",
      description:
        "Surgical procedures the patient has undergone, along with dates ..",
      creatorName: "Mckay Jessica (MD)",
    },
    {
      title: "Leg Summary",
      status: "Saved as Draft",
      billingStatus: "Unbilled",
      billingCode: "99213, 14250, 13109, ...",
      date: "03/28/2024",
      time: "22:33",
      description:
        "Outline any relevant medical conditions that run in, along with dates ..",
      creatorName: "Mckay Jessica (MD)",
    },
    {
      title: "Leg Summary",
      status: "Saved as Draft",
      billingStatus: "Unbilled",
      billingCode: "99213, 14250, 13109, ...",
      date: "03/28/2024",
      time: "22:33",
      description:
        "Outline any relevant medical conditions that run in, along with dates ..",
      creatorName: "Mckay Jessica (MD)",
    },
  ];

  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    bottomSheetRef.current?.close();
  }, []);
  // const handleOpenPress = useCallback(() => {
  //   bottomSheetRef.current?.expand();
  // }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: getWidthEquivalent(24),
        backgroundColor: "#ffff",
      }}
    >
      <View style={styles.headContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.logo}>
            <SvgXml xml={Vector} width={"100%"} height={"100%"}></SvgXml>
          </View>
          <Text style={styles.headText}>Clark, Johanna Jerome</Text>
        </View>
        <View style={styles.shareLogo}>
          <SvgXml xml={share} width={"100%"} height={"100%"}></SvgXml>
        </View>
      </View>
      <Text style={styles.subHeadText}>Created by Mckay, Jessica (MD)</Text>
      <View style={styles.barContainer}>
        <View style={styles.bar}>
          <View style={styles.inactiveContainer}>
            <Text style={styles.barText}>Patient Information</Text>
          </View>
          <View style={styles.inBar}>
            <Text style={styles.barText2}>Encounters</Text>
          </View>
        </View>
        <View style={styles.fileButton}>
          <View style={styles.fileLogo}>
            <SvgXml xml={file} width={"100%"} height={"100%"}></SvgXml>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: getHeightEquivalent(24),
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput placeholder="Select" style={styles.inputField}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}
        >
          <View style={styles.filterConatiner}>
            <View style={styles.filterLogo}>
              <SvgXml xml={filter} width={"100%"} height={"100%"}></SvgXml>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Dropdown
        data={data.map((item) => ({
          label: item,
          value: item,
        }))}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        maxHeight={100}
        labelField="label"
        valueField="value"
        placeholder={`All Encounters`}
        onChange={(item) => {
          console.log(item);
        }}
        renderRightIcon={() => (
          <View style={styles.filterLogo}>
            <SvgXml xml={downarrow} width={"100%"} height={"100%"}></SvgXml>
          </View>
        )}
        style={styles.dropBox}
      />
      {/* --------------------------------------------------card start */}
      <ScrollView
        style={{ flex: 1, paddingBottom: getHeightEquivalent(26) }}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {cardData.map((value, index) => {
          return (
            <View key={index}>
              <View style={styles.cardContainer}>
                <View style={styles.cardInContainer1}>
                  <View style={{ flexDirection: "row" }}>
                    {value.title === "Surgery" ? null : (
                      <View style={styles.downBlueLogo}>
                        <SvgXml
                          xml={downarrow}
                          width={"100%"}
                          height={"100%"}
                        ></SvgXml>
                      </View>
                    )}

                    <Text style={styles.cardText1}>{value.title}</Text>
                    {value.status === "none" ? null : (
                      <View
                        style={{
                          height: getHeightEquivalent(17),
                          borderRadius: 16,
                          marginLeft: getWidthEquivalent(8),
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor:
                            value.status === "Marked as Error"
                              ? "#FEF0F0"
                              : "#FFF0DF",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: fontEq(10),
                            marginHorizontal: getWidthEquivalent(10),
                            fontFamily: "Greycliffcf-medium",
                            color:
                              value.status === "Marked as Error"
                                ? "#EE3F3F"
                                : "#FF7800",
                          }}
                        >
                          {value.status}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={[
                        styles.greenContainer,
                        {
                          backgroundColor:
                            value.billingStatus === "Billed"
                              ? "#E4FCF2"
                              : "#F0F0F0",
                          borderRadius: 40,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.greenText,
                          {
                            color:
                              value.billingStatus === "Billed"
                                ? "#18C07A"
                                : "#A0A0A0",
                          },
                        ]}
                      >
                        {value.billingStatus}
                      </Text>
                    </View>
                    <View style={styles.dots}>
                      <SvgXml
                        xml={dots}
                        width={"100%"}
                        height={"100%"}
                      ></SvgXml>
                    </View>
                  </View>
                </View>
                <View style={styles.cardInContainer2}>
                  <Text ellipsizeMode="tail" style={styles.cardText2}>
                    {value.description}
                  </Text>
                </View>
                <View style={styles.cardInContainer3}>
                  <View style={styles.billContainer}>
                    <Text style={styles.billText}>Billing Code:</Text>
                    <Text style={styles.numberText}>{value.billingCode}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: getWidthEquivalent(44.4),
                    }}
                  >
                    <View style={styles.calender}>
                      <SvgXml
                        xml={calender}
                        width={"100%"}
                        height={"100%"}
                      ></SvgXml>
                    </View>
                    <Text style={styles.dateText}>{value.date}</Text>
                    <Text style={styles.dateText}> {value.time}</Text>
                  </View>
                </View>
                <View style={styles.cardInContainer4}>
                  <Text style={styles.button}>View Details</Text>
                  <View style={styles.rightarrow}>
                    <SvgXml
                      xml={rightarrow}
                      width={"100%"}
                      height={"100%"}
                    ></SvgXml>
                  </View>
                </View>
                <View style={styles.cardInContainer5}>
                  <Text style={styles.cardtext3}>
                    Created by {value.creatorName}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.actionButton}>
        <View style={styles.plusLogo}>
          <SvgXml xml={plus} width={"100%"} height={"100%"}></SvgXml>
        </View>
      </View>

      <BottomSheet
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop
            {...backdropProps}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.64}
            //onPress={bottomSheetRef.current?.close}
          />
        )}
        
        snapPoints={["54%"]}
        ref={bottomSheetRef}
        //onChange={handleSheetChanges}
        style={{ borderRadius: 28, overflow: "hidden" }}
      >
        <BottomSheetView
          style={{
            flex: 1,
            paddingHorizontal: getWidthEquivalent(24),
          }}
        >
          <Text style={styles.sheetText1}>Sort & Filter</Text>
          <View style={styles.sheetConatiner1}>
            <Text style={styles.sheetText2}>Sort By Billing Status</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={[styles.billsheetContainer]}>
                <Text style={[styles.sheetText3]}>Billed</Text>
              </View>
              <View
                style={[
                  styles.billsheetContainer,
                  {
                    backgroundColor: "#FFFFFF",
                    borderWidth: 1,
                    borderColor: "#D3D3D3",
                    borderRadius: 13,
                  },
                ]}
              >
                <Text style={[styles.sheetText3]}>unbilled</Text>
              </View>
            </View>
          </View>
          <Text style={styles.inputHead}>Filter Type</Text>
          <Text style={styles.selectText}>Encounter Type</Text>
          <Dropdown
            data={data.map((item) => ({
              label: item,
              value: item,
            }))}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={`Select`}
            onChange={(item) => {
              console.log(item);
            }}
            renderRightIcon={() => (
              <View style={styles.filterLogo}>
                <SvgXml xml={downarrow} width={"100%"} height={"100%"}></SvgXml>
              </View>
            )}
            style={styles.dropBox}
          />
          <Text style={styles.inputHead}>Filter Date Range</Text>
          <View style={{ width: "100%", marginTop: getHeightEquivalent(18) }}>
            <View style={styles.datePickerContainer}>
              <View style={styles.inDateContainer}>
                <Text style={styles.dateText1}>From</Text>
                <View style={styles.inputDate}>
                  <TextInput
                    placeholder="mm/dd/yyyy"
                    style={{
                      fontSize: fontEq(14),
                      fontFamily: "Greycliffcf-regular",
                      lineHeight: getHeightEquivalent(13.86),
                    }}
                  ></TextInput>
                  <Image
                    style={{ alignSelf: "center" }}
                    source={require("../../Assets/Images/greycalender.png")}
                  ></Image>
                </View>
              </View>
              <View style={styles.inDateContainer}>
                <Text style={styles.dateText1}>From</Text>
                <View style={styles.inputDate}>
                  <TextInput
                    placeholder="mm/dd/yyyy"
                    style={{
                      fontSize: fontEq(14),
                      fontFamily: "Greycliffcf-regular",
                      lineHeight: getHeightEquivalent(13.86),
                    }}
                  ></TextInput>
                  <Image
                    style={{ alignSelf: "center" }}
                    source={require("../../Assets/Images/greycalender.png")}
                  ></Image>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              marginTop: getHeightEquivalent(42),
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: getHeightEquivalent(24),
            }}
          >
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
              style={styles.acceptButton}
            >
              <Text style={[styles.cancelText, { color: "#FFFFFF" }]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default EncountersScreen;
