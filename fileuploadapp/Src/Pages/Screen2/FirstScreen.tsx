import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View, Text, BackHandler, Button, Modal } from "react-native";
import { StyleSheet } from "react-native";
import { CalendarList } from "react-native-calendars";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
export const FirstScreen = ({ navigation }: any) => {
  //   const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handlePress = () => {
    navigation.navigate("Separate");
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <Button title="open Calander" onPress={() => null} />
      <Button title="Select date" onPress={openModal} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Thu, Apr 25</Text>
          <CalendarList
            // Enable horizontal scrolling
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            // Set custom calendarWidth.

            calendarWidth={320}
          />
          <Button title="Cancel" onPress={closeModal} />
          <Button title="OK" onPress={closeModal} />
        </View>
      </Modal>
      <Button title="Go to Separate Screen" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
});
