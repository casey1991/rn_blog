import { StyleSheet } from "react-native";
import { Colors, Dimensions } from "../Themes";
const basicStyle = {
  buttonStyle: {
    paddingLeft: Dimensions.COMMON_PADDING,
    paddingRight: Dimensions.COMMON_PADDING,
    paddingTop: Dimensions.COMMON_INNER_PADDING,
    paddingBottom: Dimensions.COMMON_INNER_PADDING
  }
};
const enableStyle = StyleSheet.create({
  ...basicStyle,
  sendButton: {
    borderWidth: Dimensions.COMMON_BORDER_WIDTH,
    flexDirection: "column",
    borderRadius: Dimensions.COMMON_BORDER_RADIUS,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center"
  },
  text: {
    color: Colors.white,
    fontSize: Dimensions.TEXT_SIZE_PRIMARY
  }
});
const disableStyle = StyleSheet.create({
  ...basicStyle,
  sendButton: {
    backgroundColor: Colors.white,
    borderWidth: Dimensions.COMMON_BORDER_WIDTH,
    borderRadius: Dimensions.COMMON_BORDER_RADIUS,
    flexDirection: "column",
    borderColor: Colors.textColorDisable,
    justifyContent: "center"
  },
  text: {
    color: Colors.textColorDisable,
    fontSize: Dimensions.TEXT_SIZE_PRIMARY
  }
});
export const styles = {
  ["ENABLE"]: enableStyle,
  ["DISABLE"]: disableStyle
};
