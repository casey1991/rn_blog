import { StyleSheet, Platform } from "react-native";
const actionbarHeight = Platform.OS === "ios" ? 44 : 44;
export const styles = StyleSheet.create({
  container: {
    height: actionbarHeight,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row"
  }
});
