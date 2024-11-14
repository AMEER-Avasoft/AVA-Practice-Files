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
  headText: {
    fontSize: fontEq(24),
    fontFamily: "Greycliffcf-demibold",
    marginTop: getHeightEquivalent(24),
  },
  description: {
    fontSize: fontEq(16),
    fontWeight: "500",
    fontFamily: "Greycliffcf-medium",
    marginTop: getHeightEquivalent(16),
    lineHeight: getHeightEquivalent(24),
    textAlign: "center",
    color: "#808080",
  },
  tickLogo: {
    height: getHeightEquivalent(113),
    width: getHeightEquivalent(113),
    marginTop: getHeightEquivalent(206),
  },
  buttonText: {
    fontSize: fontEq(16),
    color: "#ffffff",
    fontFamily: "Greycliffcf-demibold",
  },
});
