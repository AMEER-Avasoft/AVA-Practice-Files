import { Button, StyleSheet } from "react-native";
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
    backgroundColor: "#ffff",
  },
  logo: {
    height: getHeightEquivalent(50),
    width: getWidthEquivalent(177.14),
    marginTop: getHeightEquivalent(43),
  },
  textContainer: {
    width: getWidthEquivalent(366),
    marginTop: getHeightEquivalent(49),
  },
  headText: {
    fontSize: fontEq(20),
    fontFamily: "Greycliffcf-demibold",
    textAlign: "left",
    lineHeight: getHeightEquivalent(28),
  },
  description1: {
    marginTop: getHeightEquivalent(16),
    fontSize: fontEq(14),
    fontWeight: "500",
    fontFamily: "Greycliffcf-medium",
    textAlign: "left",
    lineHeight: getHeightEquivalent(24),
    color: "#262626",
  },
  linkContainer: { width: "100%", flexDirection: "row" },
  description2: {
    fontSize: fontEq(14),
    fontWeight: "600",
    textAlign: "left",
    fontFamily: "Greycliffcf-demibold",
    lineHeight: getHeightEquivalent(24),
    color: "#262626",
  },
  descriptionLink: {
    fontSize: fontEq(14),
    fontWeight: "600",
    fontFamily: "Greycliffcf-demibold",
    textAlign: "left",
    lineHeight: getHeightEquivalent(24),
    color: "#457B9D",
  },
  button: {
    backgroundColor: "#457B9D",
    height: getHeightEquivalent(48),
    width: getWidthEquivalent(366),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: getHeightEquivalent(42),
  },
  buttonText: {
    fontSize: fontEq(16),
    fontWeight: "600",
    color: "#ffffff",
    fontFamily: "Greycliffcf-demibold",
    lineHeight: getHeightEquivalent(15.84),
  },
});
