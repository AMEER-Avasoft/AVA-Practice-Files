import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { SvgXml } from "react-native-svg";
import React from "react";
import { styles } from "./SignUpScreenStyles";
import SelectDropdown from "react-native-select-dropdown";
import useSignUpScreenVM from "./SignUpScreenVM";
import { Dropdown } from "react-native-element-dropdown";
import Checkbox from "expo-checkbox";
import { appSvg } from "../../Assets/Images/appsvg";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import { ScrollView } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation, route }: SignUpScreenProps) => {
  const {
    activeProfile,
    updateActiveProfile,
    navigateToSignInScreen,
    navigateToSuccessScreen,
    professionData,
    countryData,
    specialityData,
    flagData,
    selectedCountry,
    practiceInputFields,
    userInputFields,
  } = useSignUpScreenVM({
    navigation,
    route,
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.logo}>
            <SvgXml xml={appSvg} height={"100%"} width={"100%"}></SvgXml>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.stepperContainer}>
            <View style={styles.stepperInContainer}>
              <View
                style={[
                  styles.progressContainer,
                  {
                    borderColor:
                      activeProfile === "User" ? "#ECECEC" : "#123175",
                  },
                ]}
              />
              <View style={styles.activeContainer}>
                <Image
                  source={require("../../Assets/Images/active.png")}
                ></Image>
                <Text style={styles.headText1}>User Profile</Text>
              </View>
              <View style={styles.inMainContainer}>
                {activeProfile === "User" ? (
                  <Image
                    source={require("../../Assets/Images/inactive.png")}
                  ></Image>
                ) : (
                  <Image
                    source={require("../../Assets/Images/active.png")}
                  ></Image>
                )}

                <Text
                  style={[
                    styles.headText1,
                    {
                      color: activeProfile === "User" ? "#C0C0C0" : "#123175",
                    },
                  ]}
                >
                  Practice Profile
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.pageHeader}>
            {activeProfile === "User" ? " User Profile" : "Practice Profile"}
          </Text>

          {activeProfile === "User" ? (
            <>
              {userInputFields.map((value: string, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.inputContainer,
                      { marginTop: getHeightEquivalent(32) },
                    ]}
                  >
                    <View style={styles.inTextContainer}>
                      <Text style={styles.inputText}>{value}</Text>
                      {value === "Middle Name" ? null : (
                        <Text style={styles.hash}>*</Text>
                      )}
                    </View>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder={`Enter Your ${value}`}
                        placeholderTextColor="#C0C0C0"
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                );
              })}
              {/* -------------------------------------------------------------------------until email */}
              <View style={{ marginTop: getHeightEquivalent(24) }}>
                <View style={styles.inTextContainer}>
                  <Text style={styles.inputText}>Phone number</Text>

                  <Text style={styles.hash}>*</Text>
                </View>

                <View
                  style={[styles.inputBox, { width: getWidthEquivalent(366) }]}
                >
                  <SelectDropdown
                    defaultValue={flagData[0]}
                    data={flagData}
                    onSelect={(item) => {
                      console.log(item);
                    }}
                    statusBarTranslucent
                    renderButton={() => {
                      return (
                        <View style={styles.dropdownButtonStyle}>
                          {selectedCountry && (
                            <>
                              <View style={styles.flagSize}>
                                <SvgXml
                                  xml={selectedCountry.flagAssetPath}
                                  width={"100%"}
                                  height={"100%"}
                                />
                              </View>
                              <Image
                                source={require("../../Assets/Images/down.png")}
                              ></Image>
                            </>
                          )}
                        </View>
                      );
                    }}
                    renderItem={(item, index, isSelected) => {
                      return (
                        <View
                          style={[
                            styles.dropdownItemStyle,
                            {
                              flexDirection: "row",
                            },
                            isSelected && { backgroundColor: "#fffff" },
                          ]}
                        >
                          <View style={styles.flagSize}>
                            <SvgXml
                              xml={item.flagAssetPath}
                              height={"100%"}
                              width={"100%"}
                            />
                          </View>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                  />
                  <TextInput
                    placeholder={`Enter Your Phone number`}
                    placeholderTextColor="#C0C0C0"
                    style={[
                      styles.textInput,
                      {
                        marginLeft: getWidthEquivalent(12),
                        width: getWidthEquivalent(260),
                      },
                    ]}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { marginTop: getHeightEquivalent(24) },
                ]}
              >
                <View style={styles.inTextContainer}>
                  <Text style={styles.inputText}>Password</Text>
                  <Text style={[styles.hash]}>*</Text>
                </View>
                <View style={[styles.inputBox]}>
                  <TextInput
                    //onFocus={() => checkfocus('Email')}
                    //onChangeText={text => onChangeTextUpdate(text, 'Email')}
                    //onBlur={() => usernameValidation(userDetails.current.username)}
                    placeholder="Enter your Password"
                    secureTextEntry
                    placeholderTextColor="#C0C0C0"
                    style={[
                      styles.textInput,
                      { width: getWidthEquivalent(300) },
                    ]}
                  ></TextInput>
                  <Image
                    style={styles.eyeContainer}
                    source={require("../../Assets/Images/eyeOpened.png")}
                  ></Image>
                </View>
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { marginTop: getHeightEquivalent(39) },
                ]}
              >
                <View style={styles.inTextContainer}>
                  <Text style={styles.inputText}>Confirm Password</Text>
                  <Text style={[styles.hash]}>*</Text>
                </View>
                <View style={[styles.inputBox]}>
                  <TextInput
                    //onFocus={() => checkfocus('Email')}
                    //onChangeText={text => onChangeTextUpdate(text, 'Email')}
                    //onBlur={() => usernameValidation(userDetails.current.username)}
                    placeholder="Confirm Password"
                    secureTextEntry
                    placeholderTextColor="#C0C0C0"
                    style={[
                      styles.textInput,
                      { width: getWidthEquivalent(300) },
                    ]}
                  ></TextInput>
                  <Image
                    style={styles.eyeContainer}
                    source={require("../../Assets/Images/eyeOpened.png")}
                  ></Image>
                </View>
              </View>
              <View>
                {["Profession", "Speciality"].map((value, index) => {
                  const data =
                    value === "Profession" ? professionData : specialityData;
                  return (
                    <View
                      key={index}
                      style={{
                        marginTop: getHeightEquivalent(24),
                      }}
                    >
                      <View style={[styles.inTextContainer]}>
                        <Text style={styles.inputText}>{value}</Text>
                        <Text style={[styles.hash]}>*</Text>
                      </View>
                      <View>
                        <Dropdown
                          data={data.map((item) => ({
                            label: item,
                            value: item,
                          }))}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          iconStyle={styles.iconStyle}
                          maxHeight={100}
                          labelField="label"
                          valueField="value"
                          placeholder={`Select`}
                          onChange={(item) => {
                            console.log(item);
                          }}
                          renderRightIcon={() => (
                            <Image
                              source={require("../../Assets/Images/down.png")}
                              style={styles.dropdownIcon}
                            />
                          )}
                          style={styles.dropDownContainer}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => updateActiveProfile("Practice")}
                  style={styles.button}
                >
                  <Text
                    style={styles.nextButton}
                  >
                    Next
                  </Text>
                </TouchableOpacity>
                <View style={styles.bottomContainer}>
                  <Text style={styles.bottomText1}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={navigateToSignInScreen}>
                    <Text style={styles.bottomText2}> Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <>
              {practiceInputFields.map((value, index) => {
                const isCountryOrProvince =
                  value === "Country" || value === "Province";
                return (
                  <View key={index}>
                    {isCountryOrProvince ? (
                      <View
                        key={index}
                        style={[
                          styles.inputContainer,
                          { marginTop: getHeightEquivalent(32) },
                        ]}
                      >
                        <View style={styles.inTextContainer}>
                          <Text style={styles.inputText}>{value}</Text>

                          <Text style={styles.hash}>*</Text>
                        </View>
                        <View>
                          <Dropdown
                            data={countryData.map((item) => ({
                              label: item,
                              value: item,
                            }))}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            maxHeight={100}
                            labelField="label"
                            valueField="value"
                            placeholder={`Select`}
                            onChange={(item) => {
                              console.log(item);
                            }}
                            renderRightIcon={() => (
                              <Image
                                source={require("../../Assets/Images/down.png")}
                                style={styles.dropdownIcon}
                              />
                            )}
                            style={styles.dropDownContainer}
                          />
                        </View>
                      </View>
                    ) : (
                      <>
                        <View
                          key={index}
                          style={[
                            styles.inputContainer,
                            { marginTop: getHeightEquivalent(32) },
                          ]}
                        >
                          <View style={styles.inTextContainer}>
                            <Text style={styles.inputText}>{value}</Text>
                            {value === "Practice Name" ? null : (
                              <Text style={styles.hash}>*</Text>
                            )}
                          </View>
                          <View style={styles.inputBox}>
                            <TextInput
                              placeholder={`Enter Your ${value}`}
                              placeholderTextColor="#C0C0C0"
                              style={styles.textInput}
                            />
                          </View>
                        </View>
                      </>
                    )}
                  </View>
                );
              })}
              <View style={styles.checkContainer}>
                <Checkbox
                  style={styles.checkBox}
                  //value={isChecked}
                  //onValueChange={setChecked}
                  color={"#BEBEBE"}
                />
                <View style={{ width: getWidthEquivalent(343) }}>
                  <Text style={styles.bottomText1} numberOfLines={2}>
                    I agree to the
                    <Text style={styles.bottomText3}>
                      {" "}
                      terms and conditions{" "}
                    </Text>
                    and
                    <Text style={styles.bottomText3}> privacy policy</Text> of
                    this application
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={navigateToSuccessScreen}
                style={styles.button}
              >
                <Text
                  style={styles.buttonWhiteText}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateActiveProfile("User")}
                style={styles.whiteButton}
              >
                <Text style={styles.whiteButtonText}>Back</Text>
              </TouchableOpacity>
              <View style={styles.bottomContainer}>
                <Text style={styles.bottomText1}>Already have an account?</Text>
                <TouchableOpacity onPress={navigateToSignInScreen}>
                  <Text style={styles.bottomText2}> Sign In</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
