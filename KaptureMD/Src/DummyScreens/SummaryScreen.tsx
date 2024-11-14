import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./SummaryScreenStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { ScrollView } from "react-native-gesture-handler";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../Helpers/Utilities/Utilities";
import AudioPlayer from "./AudioPlayer";

interface messageBO {
  name: string;
  message: string;
  user: boolean;
}
const SummaryScreen = () => {
  const data = ["Medicare", "Medicaid", "Self Pay"];
  const messageData: messageBO[] = [
    {
      name: "Mckay, Jessica (MD)",
      message: "Hey Johanna, What’s going on ?",
      user: true,
    },
    {
      name: "Clark, Johanna",
      message:
        "I’ve had this cough for about three days now and it seems to be getting worse",
      user: false,
    },
    {
      name: "Mckay, Jessica (MD)",
      message:
        "Do you gave any other symptoms? Fever, maybe some shortness of breath?",
      user: true,
    },
    {
      name: "Clark, Johanna",
      message:
        "No, no fever or shortness of breath. I’m not coughing up anything. It’s pretty dry. My eyes",
      user: false,
    },
  ];
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordUri, setRecordUri] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      console.log("Audio permission status:", status);
      if (status !== "granted") {
        console.log("Audio permission not granted");
        // You might want to show an alert to the user here
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    })();
  }, []);
  const testAudioPermission = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      console.log("Audio permission status:", status);
      if (status === "granted") {
        console.log("Permission granted, attempting to record...");
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        await recording.startAsync();
        console.log("Recording started");
        // Stop recording after 5 seconds
        setTimeout(async () => {
          await recording.stopAndUnloadAsync();
          console.log("Recording stopped");
        }, 50);
      } else {
        console.log("Audio permission not granted");
      }
    } catch (error) {
      console.error("Error testing audio:", error);
    }
  };
  const startRecording = async () => {
    try {
      console.log("Requesting audio permission...");
      const { status } = await Audio.requestPermissionsAsync();
      console.log("Audio permission status:", status);
      if (status !== "granted") {
        console.log("Audio permission denied");
        // Alert the user that permission is required
        Alert.alert(
          "Permission required",
          "This app needs access to your microphone to record audio.",
          [{ text: "OK" }]
        );
        return;
      }

      // Rest of your startRecording logic...
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      setRecording(null);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordUri(uri);
      setIsRecording(false);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <View style={styles.headInContainer}>
          <Image
            style={styles.leftImage}
            source={require("../Assets/Images/left.png")}
          ></Image>
          <Text style={styles.headText}>Consultation Summary</Text>
        </View>
        <Image
          style={styles.optionsImage}
          source={require("../Assets/Images/options.png")}
        ></Image>
      </View>
      <View style={styles.billContainer}>
        <Text style={styles.billText1}>Billing Code:</Text>
        <Text>99214-Chronic Disease, 99214-Co...</Text>
      </View>
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
        placeholder={`Unbilled`}
        onChange={(item) => {
          console.log(item);
        }}
        renderRightIcon={() => (
          <Image source={require("../Assets/Images/downDark.png")} />
        )}
        style={styles.dropDownContainer}
      />
      <View style={styles.changeContainer}>
        <Text style={styles.changeText}>Change Billing Code</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: getHeightEquivalent(25) }}
      >
        <View style={styles.partContainer}>
          <View
            style={{
              width: getWidthEquivalent(168.5),
              borderTopWidth: 1,
              borderColor: "#E3E3E3",
            }}
          ></View>
          <Text style={styles.partText}>Part 1</Text>
          <View
            style={{
              width: getWidthEquivalent(168.5),
              borderTopWidth: 1,
              borderColor: "#E3E3E3",
            }}
          ></View>
        </View>
        <View style={styles.audioContainer}></View>
        {messageData.map((value: messageBO, index: number) => {
          return (
            <View
              style={{
                width: getWidthEquivalent(382),
                alignSelf: "center",
                marginBottom: getHeightEquivalent(32),
                alignItems: value.user === true ? "flex-end" : "flex-start",
              }}
              key={index}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.nameText}>{value.name}</Text>
                <Image
                  style={{
                    height: getHeightEquivalent(16),
                    width: getHeightEquivalent(16),
                    marginLeft: getWidthEquivalent(3),
                  }}
                  source={require("../Assets/Images/user.png")}
                ></Image>
              </View>
              <View
                style={[
                  styles.messageBox,
                  {
                    alignItems: value.user === true ? "flex-end" : "flex-start",
                  },
                ]}
              >
                <Text style={styles.messageText}>{value.message}</Text>
              </View>
            </View>
          );
        })}
        <View style={{ height: getHeightEquivalent(226) }}>
          {recordUri && <AudioPlayer uri={recordUri} />}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={isRecording ? stopRecording : startRecording}
        style={styles.recordButton}
      >
        <Image
          style={{
            height: getHeightEquivalent(32),
            width: getHeightEquivalent(32),
          }}
          source={
            isRecording
              ? require("../Assets/Images/edit.png")
              : require("../Assets/Images/mic.png")
          }
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={testAudioPermission} style={styles.editButton}>
        <Image
          style={{
            height: getHeightEquivalent(20),
            width: getHeightEquivalent(20),
          }}
          source={require("../Assets/Images/edit.png")}
        ></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SummaryScreen;
