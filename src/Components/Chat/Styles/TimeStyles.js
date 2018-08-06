import { StyleSheet } from "react-native";
import { Colors, Dimensions } from "../Themes";
const styles = StyleSheet.create({
  layoutContianer: {
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    padding: 4,
    backgroundColor: Colors.background_color,
    borderRadius: 5
  },
  text: {
    fontSize: Dimensions.TEXT_SIZE_HINT,
    color: Colors.text_color
  }
});
export default styles;
