import { StyleSheet } from "react-native";
import {
  getHeightEquivalent,
  getWidthEquivalent,
  fontEq,
} from "../../Helpers/Utilities/Utilities";
import { height } from "../../Helpers/Constants/AppConstants";

export const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    height: getHeightEquivalent(50),
    width: getWidthEquivalent(180.14),
    marginTop: getHeightEquivalent(43),
  },
  tickPng: {
    height: getHeightEquivalent(113),
    width: getHeightEquivalent(113),
    marginTop: getHeightEquivalent(206),
  },
  successText: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: getHeightEquivalent(24),
    fontFamily: "Greycliffcf-demibold",
    lineHeight: getHeightEquivalent(23.76),
  },
  buttonStyles: {
    backgroundColor: "#457B9D",
    height: getHeightEquivalent(48),
    width: getWidthEquivalent(366),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: getHeightEquivalent(40),
  },
  button2Styles: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Greycliffcf-demibold",
    lineHeight:getHeightEquivalent(15.84)
  },
});
