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
    borderColor: Colors.PRIMARY_COLOR,
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: "center"
  },
  text: {
    color: Colors.WHITE,
    fontSize: Dimensions.TEXT_SIZE_PRIMARY
  }
});
const disableStyle = StyleSheet.create({
  ...basicStyle,
  sendButton: {
    backgroundColor: Colors.WHITE,
    borderWidth: Dimensions.COMMON_BORDER_WIDTH,
    borderRadius: Dimensions.COMMON_BORDER_RADIUS,
    flexDirection: "column",
    borderColor: Colors.TEXT_DISABLE_COLOR,
    justifyContent: "center"
  },
  text: {
    color: Colors.TEXT_DISABLE_COLOR,
    fontSize: Dimensions.TEXT_SIZE_PRIMARY
  }
});
export const styles = {
  ["ENABLE"]: enableStyle,
  ["DISABLE"]: disableStyle
};
