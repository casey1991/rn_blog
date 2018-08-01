import { StyleSheet } from "react-native";
import { Colors, Dimensions } from "../Themes";
const styles = StyleSheet.create({
  containerLayout: {},
  container: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  text: {
    fontSize: Dimensions.TEXT_SIZE_HINT,
    color: Colors.white
  }
});
export default styles;
