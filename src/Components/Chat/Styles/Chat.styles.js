import { StyleSheet } from "react-native";
import { Dimensions, Colors } from "../Themes";
export const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    flexDirection: "column"
  },
  layoutMessageContainer: {
    flex: 1
  },
  layoutBottomActions: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.DIVIDER,
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    alignItems: "flex-end",
    padding: Dimensions.COMMON_PADDING
  },
  layoutTextInput: {
    flex: 1
  },
  layoutActions: {
    flexDirection: "row"
  }
});
