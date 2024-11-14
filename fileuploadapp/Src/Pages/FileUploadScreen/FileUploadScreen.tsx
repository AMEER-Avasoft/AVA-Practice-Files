import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./FileUploadScreenStyles";
import { ScrollView } from "react-native-gesture-handler";
import {
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

const FileUploadScreen = () => {
  const [frontCardImage, setFrontCardImage] = useState<string>("");
  const [backCardImage, setBackCardImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      if (
        cameraPermission.status !== "granted" ||
        mediaLibraryPermission.status !== "granted"
      ) {
        Alert.alert(
          "Permission required",
          "Sorry, we need camera and media library permissions to make this work!"
        );
      }
    })();
  }, []);

  const saveToGallery = async (uri: string) => {
    try {
      await MediaLibrary.saveToLibraryAsync(uri);
      //   await MediaLibrary.createAlbumAsync("IDCards", asset, false);
      console.log("Photo saved to gallery");
    } catch (error) {
      console.error("Error saving photo to gallery:", error);
    }
  };
  const takePicture = async (isForFrontCard: boolean) => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      cameraType: ImagePicker.CameraType.back,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      if (isForFrontCard) {
        setFrontCardImage(result.assets[0].uri);
      } else {
        setBackCardImage(result.assets[0].uri);
      }
      await saveToGallery(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Image source={require("../../Assets/Images/Vector.png")}></Image>
        <Text style={styles.header}>Add Photo ID</Text>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Add photos of your ID card. We’ll send your ID to the clinic to
            verify.
          </Text>
        </View>
        <View
          style={[
            styles.uploadContainer,
            { backgroundColor: frontCardImage != "" ? "#ffff" : "#E7EEF0" },
          ]}
        >
          {frontCardImage != "" ? (
            <TouchableOpacity
              style={{
                height: getHeightEquivalent(194),
                alignSelf: "center",
                width: getWidthEquivalent(281),
              }}
              onPress={() => {
                setFrontCardImage("");
              }}
            >
              <Image
                source={{ uri: frontCardImage }}
                style={styles.capturedImage}
              />
            </TouchableOpacity>
          ) : (
            <>
              <Text style={styles.uploadText}>Front of card</Text>
              <TouchableOpacity
                onPress={() => takePicture(true)}
                style={styles.uploadButton}
              >
                <Image
                  source={require("../../Assets/Images/camera.png")}
                ></Image>
                <Text style={styles.buttonText}>Take a photo</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={[
            styles.uploadContainer,
            {
              marginTop: getHeightEquivalent(24),
              backgroundColor: frontCardImage != "" ? "#ffff" : "#E7EEF0",
            },
          ]}
        >
          {backCardImage != "" ? (
            <TouchableOpacity
              style={{
                height: getHeightEquivalent(194),
                alignSelf: "center",
                width: getWidthEquivalent(281),
              }}
              onPress={() => {
                setBackCardImage("");
              }}
            >
              <Image
                source={{ uri: backCardImage }}
                style={styles.capturedImage}
              />
            </TouchableOpacity>
          ) : (
            <>
              <Text style={styles.uploadText}>Back of card</Text>
              <TouchableOpacity
                onPress={() => takePicture(false)}
                style={styles.uploadButton}
              >
                <Image
                  source={require("../../Assets/Images/camera.png")}
                ></Image>
                <Text style={styles.buttonText}>Take a photo</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>
            NOTE: The image size should be less than 5MB
          </Text>
        </View>
        <Text style={styles.text1} numberOfLines={1} ellipsizeMode="tail">
          When taking a photo, make sure the card...
        </Text>
        <View style={styles.tickContainer}>
          <Image source={require("../../Assets/Images/tick.png")}></Image>
          <Text style={styles.tickText}>
            Is lying flat and centered in the camera window
          </Text>
        </View>
        <View style={styles.tickContainer}>
          <Image source={require("../../Assets/Images/tick.png")}></Image>
          <Text style={styles.tickText}>
            Is well lit with minimal glare on the surface
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.continueText}>Continue</Text>
          <Image source={require("../../Assets/Images/right.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2}>
          <Text style={styles.stepText}>Skip This Step</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FileUploadScreen;
