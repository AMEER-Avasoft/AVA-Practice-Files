import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { View, TouchableOpacity, Text, Image } from "react-native";

const AudioPlayer = ({ uri }: any) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else if (uri) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        {},
        onPlaybackStatusUpdate
      );
      setSound(newSound);
      await newSound.playAsync();
      setIsPlaying(true);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (!status.isLoaded) {
      if (status.error) {
        console.error(`Playback error: ${status.error}`);
      }
    } else {
      if (status.isPlaying !== isPlaying) {
        setIsPlaying(status.isPlaying);
      }
    }
  };

  // Use your existing or customized UI for playback controls here
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <TouchableOpacity onPress={handlePlayPause}>
        <Image
          source={
            isPlaying
              ? require("../Assets/Images/tick.png") // Replace with your pause icon
              : require("../Assets/Images/play.png") // Replace with your play icon
          }
        />
      </TouchableOpacity>
      {/* Add additional playback controls and info as needed */}
    </View>
  );
};

export default AudioPlayer;
