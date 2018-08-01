import { StyleSheet } from "react-native";
import { Dimensions } from "../Themes";
export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Dimensions.AVATAR_RADIUS
  },
  image: {
    width: Dimensions.AVATAR_WIDTH,
    height: Dimensions.AVATAR_HEIGHT,
    borderRadius: Dimensions.AVATAR_RADIUS
  }
});
