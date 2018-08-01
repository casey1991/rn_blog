import { StyleSheet } from "react-native";
import { Colors, Dimensions } from "../Themes";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Colors.WHITE
  },
  composerLayout: {
    marginLeft: Dimensions.COMMON_MARGIN,
    marginRight: Dimensions.COMMON_MARGIN
  }
});
