import { StyleSheet } from "react-native";
import { Colors, Dimensions } from "../Themes";

export const styles = StyleSheet.create({
  layoutContainer: {
    borderRadius: Dimensions.COMMON_BORDER_RADIUS,
    borderWidth: Dimensions.COMMON_BORDER_WIDTH,
    borderColor: Colors.WHITE,
    padding: Dimensions.COMMON_PADDING,
    backgroundColor: Colors.white
  }
});
