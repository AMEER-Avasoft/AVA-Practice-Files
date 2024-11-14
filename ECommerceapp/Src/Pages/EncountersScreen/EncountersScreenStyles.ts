import { StyleSheet } from "react-native";
import {
  fontEq,
  getHeightEquivalent,
  getWidthEquivalent,
} from "../../Helpers/Utilities/Utilities";
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  inputField: {
    height: "100%",
    fontSize: fontEq(14),
    fontFamily: "Greycliffcf-regular",
    marginLeft: getWidthEquivalent(16),
  },
  headContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getHeightEquivalent(32),
    height: getHeightEquivalent(24),
  },
  headText: {
    fontFamily: "Greycliffcf-demibold",
    fontSize: fontEq(24),
    lineHeight: getHeightEquivalent(23.76),
  },
  subHeadText: {
    fontSize: fontEq(12),
    fontFamily: "Greycliffcf-regular",
    lineHeight: getHeightEquivalent(11.88),
    marginLeft: getWidthEquivalent(30),
    marginTop: getHeightEquivalent(12),
  },
  logo: {
    width: getWidthEquivalent(18),
    height: getHeightEquivalent(15),
    marginRight: getWidthEquivalent(12),
    alignSelf: "center",
  },
  shareLogo: {
    height: getHeightEquivalent(22),
    width: getHeightEquivalent(22),
  },
  barContainer: {
    width: "100%",
    height: getHeightEquivalent(40),
    marginTop: getHeightEquivalent(24),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  bar: {
    height: getHeightEquivalent(40),
    width: getWidthEquivalent(266),
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: getWidthEquivalent(6),
    paddingVertical: getHeightEquivalent(4),
  },
  inBar: {
    height: getHeightEquivalent(32),
    width: getWidthEquivalent(103),
    backgroundColor: "#E8F6FF",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  fileButton: {
    width: getHeightEquivalent(40),
    height: getHeightEquivalent(40),
    borderWidth: 1.5,
    borderColor: "#457B9D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  fileLogo: {
    height: getHeightEquivalent(19),
    width: getHeightEquivalent(19),
    alignSelf: "center",
  },
  barText: {
    fontSize: getHeightEquivalent(14),
    fontFamily: "Greycliffcf-medium",
    lineHeight: getHeightEquivalent(13.86),
    color: "#B8B8B8",
  },
  barText2: {
    fontSize: getHeightEquivalent(14),
    fontFamily: "Greycliffcf-medium",
    lineHeight: getHeightEquivalent(13.86),
    color: "#457B9D",
  },
  inactiveContainer: {
    width: getWidthEquivalent(122),
    height: getHeightEquivalent(14),
    marginLeft: getWidthEquivalent(16),
  },
  searchContainer: {
    height: getHeightEquivalent(40),
    width: "100%",
    borderWidth: 5,
  },
  inputContainer: {
    height: getHeightEquivalent(40),
    width: getWidthEquivalent(334),
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 8,
  },
  filterConatiner: {
    height: getHeightEquivalent(40),
    width: getHeightEquivalent(40),
    backgroundColor: "#457B9D",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterLogo: {
    height: getHeightEquivalent(19),
    width: getHeightEquivalent(19),
    alignSelf: "center",
  },
  placeholderStyle: {
    //height: getHeightEquivalent(48),
    // width: getWidthEquivalent(382),
    fontSize: getHeightEquivalent(14),
    fontFamily: "Greycliffcf-medium",
    lineHeight: getHeightEquivalent(16.8),
    alignSelf: "center",
  },
  dropBox: {
    height: getHeightEquivalent(48),
    width: getWidthEquivalent(382),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 6,
    paddingHorizontal: getWidthEquivalent(16),
    marginTop: getHeightEquivalent(22),
    marginBottom: getHeightEquivalent(12),
  },
  selectedTextStyle: {
    color: "red",
  },
  cardContainer: {
    overflow: "hidden",
    height: getHeightEquivalent(198),
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: getHeightEquivalent(14),
    ///----------------------->
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: {
      height: getHeightEquivalent(4),
      width: getWidthEquivalent(4),
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  cardInContainer1: {
    flexDirection: "row",
    width: getWidthEquivalent(350),
    height: getHeightEquivalent(22),
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getHeightEquivalent(16),
  },
  downBlueLogo: {
    height: getHeightEquivalent(11),
    width: getWidthEquivalent(11),
    alignSelf: "center",
    marginRight: getWidthEquivalent(12),
  },
  cardText1: {
    fontSize: fontEq(18),
    fontFamily: "Greycliffcf-demibold",
    lineHeight: getHeightEquivalent(17.82),
  },
  dots: {
    height: getHeightEquivalent(12.02),
    width: getWidthEquivalent(2.4),
    alignSelf: "center",
  },
  greenContainer: {
    height: getHeightEquivalent(22),
    width: getWidthEquivalent(57),
    backgroundColor: "#E4FCF2",

    marginRight: 8,
    alignSelf: "center",
    justifyContent: "center",
  },
  greenText: {
    fontSize: fontEq(10),
    fontFamily: "Greycliffcf-medium",
    lineHeight: getHeightEquivalent(9.9),
    color: "#18C07A",
    alignSelf: "center",
  },
  cardInContainer2: {
    width: getWidthEquivalent(350),
    marginTop: getHeightEquivalent(12),
  },
  cardText2: {
    fontSize: fontEq(12),
    fontFamily: "Greycliffcf-regular",
    lineHeight: getHeightEquivalent(24),
    textAlign: "left",
  },
  cardInContainer3: {
    width: getWidthEquivalent(350),
    marginTop: getHeightEquivalent(12),
    flexDirection: "row",
    alignItems: "center",
  },
  billContainer: {
    width: getWidthEquivalent(185),
    height: getHeightEquivalent(18),
    flexDirection: "row",
  },
  billText: {
    fontSize: fontEq(12),
    lineHeight: getHeightEquivalent(18),
    fontFamily: "Greycliffcf-medium",
    color: "#123175",
  },
  numberText: {
    fontSize: fontEq(12),
    lineHeight: getHeightEquivalent(18),
    fontFamily: "Greycliffcf-regular",
    color: "#808080",
    marginLeft: getWidthEquivalent(8),
  },
  calender: {
    height: getHeightEquivalent(16),
    width: getHeightEquivalent(16),
    alignSelf: "center",
  },
  dateText: {
    fontSize: fontEq(12),
    lineHeight: getHeightEquivalent(18),
    fontFamily: "Greycliffcf-medium",
    color: "#808080",
  },
  cardInContainer4: {
    width: getWidthEquivalent(80),
    height: getHeightEquivalent(12),
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: getWidthEquivalent(16),
    marginTop: getHeightEquivalent(20),
  },
  button: {
    fontSize: fontEq(12),
    fontFamily: "Greycliffcf-demibold",
    lineHeight: getHeightEquivalent(11.88),
    color: "#5298C1",
  },
  rightarrow: {
    width: getHeightEquivalent(8),
    height: getHeightEquivalent(8),
    marginLeft: getWidthEquivalent(4),
  },
  cardInContainer5: {
    height: getHeightEquivalent(29),
    width: getWidthEquivalent(382),
    backgroundColor: "#E6F5FF",
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    marginTop: getHeightEquivalent(9),
    paddingHorizontal: getWidthEquivalent(12),
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  cardtext3: {
    fontSize: fontEq(12),
    lineHeight: getHeightEquivalent(17),
    fontFamily: "Greycliffcf-regular",
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: getWidthEquivalent(24),
  },
  sheetText1: {
    fontSize: fontEq(20),
    fontFamily: "Greycliffcf-demibold",
    lineHeight: getHeightEquivalent(19.8),
    color: "#000000",
  },
  sheetConatiner1: {
    marginTop: getHeightEquivalent(22),
    height: getHeightEquivalent(58),
    width: getWidthEquivalent(189),
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  sheetText2: {
    fontSize: fontEq(14),
    fontFamily: "Greycliffcf-medium",
    lineHeight: getHeightEquivalent(17.5),
  },
  billsheetContainer: {
    height: getHeightEquivalent(28),
    width: getWidthEquivalent(79),
    borderRadius: 13,
    backgroundColor: "#EAF8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  sheetText3: {
    fontSize: fontEq(14),
    fontFamily: "Greycliffcf-regular",
    lineHeight: getHeightEquivalent(16.8),
    color: "#00000",
  },
  inputHead: {
    fontFamily: "Greycliffcf-bold",
    fontSize: fontEq(14),
    lineHeight: getHeightEquivalent(17.5),
    marginTop: getHeightEquivalent(32),
  },
  selectText: {
    fontFamily: "Greycliffcf-medium",
    fontSize: fontEq(14),
    lineHeight: getHeightEquivalent(13.86),
    marginTop: getHeightEquivalent(18),
  },
  datePickerContainer: {
    height: getHeightEquivalent(74),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inDateContainer: {
    height: getHeightEquivalent(74),
    width: getWidthEquivalent(182),
  },
  dateText1: {
    fontFamily: "Greycliffcf-medium",
    fontSize: fontEq(14),
    lineHeight: getHeightEquivalent(13.86),
    color: "#000000",
  },
  inputDate: {
    height: getHeightEquivalent(48),
    width: getWidthEquivalent(182),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginTop: getHeightEquivalent(12),
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: getWidthEquivalent(12),
    flexDirection: "row",
  },
  filterButton: {
    width: getWidthEquivalent(182),
    height: getHeightEquivalent(46),
    borderWidth: 0.75,
    borderRadius: 8,
    borderColor: "#BFBFBF",
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButton: {
    width: getWidthEquivalent(182),
    height: getHeightEquivalent(46),
    backgroundColor: "#457B9D",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    fontFamily: "Greycliffcf-demibold",
    fontSize: fontEq(14),
  },
  actionButton: {
    height: getHeightEquivalent(56),
    width: getHeightEquivalent(56),
    backgroundColor: "#457B9D",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: getHeightEquivalent(28),
    right: getWidthEquivalent(24),
    borderRadius: 50,
  },

  plusLogo: {
    height: getHeightEquivalent(28),
    width: getHeightEquivalent(28),
  },
});