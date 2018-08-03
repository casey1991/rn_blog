import { StyleSheet } from "react-native";
import { Colors } from "../Themes";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: Colors.primaryColor,
    borderWidth: 3,
    backgroundColor: "transparent"
  }
});
export default styles;
