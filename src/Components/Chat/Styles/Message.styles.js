import { StyleSheet } from "react-native";
import { Dimensions, Colors } from "../Themes";
import Strings from "./Strings";
const basicStyles = {
  messageStyle: {
    paddingLeft: Dimensions.COMMON_PADDING,
    paddingRight: Dimensions.COMMON_PADDING,
    paddingBottom: Dimensions.COMMON_PADDING
  }
};
export const styles = {
  [Strings.MESSAGE_POSITION_LEFT]: StyleSheet.create({
    ...basicStyles,
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginRight: Dimensions.AVATAR_WIDTH
      // backgroundColor: Colors
    },
    layoutAvatar: {
      marginRight: Dimensions.COMMON_MARGIN
    },
    layoutContent: {
      flexDirection: "column",
      justifyContent: "flex-end"
    },
    topInfoLayout: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: Dimensions.COMMON_INNER_MARGIN
    },
    bubbleLayout: {
      flexDirection: "row",
      justifyContent: "flex-start"
    }
  }),
  [Strings.MESSAGE_POSITION_RIGHT]: StyleSheet.create({
    ...basicStyles,
    container: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginLeft: Dimensions.AVATAR_WIDTH
      // backgroundColor: Colors.transparent
    },
    layoutAvatar: {
      marginLeft: Dimensions.COMMON_MARGIN
    },
    layoutContent: {
      flexDirection: "column",
      justifyContent: "flex-end"
    },
    topInfoLayout: {
      flexDirection: "row-reverse",
      alignItems: "center",
      marginBottom: Dimensions.COMMON_INNER_MARGIN
    },
    bubbleLayout: {
      flexDirection: "row",
      justifyContent: "flex-end"
    }
  })
};
