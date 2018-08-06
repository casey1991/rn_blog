import { StyleSheet } from "react-native";
import { Dimensions } from "../Themes";
import Strings from "./Strings";
export const styles = {
  [Strings.MESSAGE_POSITION_LEFT]: StyleSheet.create({
    layoutContainer: {
      flex: 1,
      margin: Dimensions.COMMON_MARGIN,
      flexDirection: "column"
    },
    container: {},
    layoutTime: {
      padding: Dimensions.COMMON_INNER_PADDING,
      justifyContent: "center",
      alignItems: "center"
    },
    layoutBody: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    layoutName: {
      marginBottom: Dimensions.COMMON_INNER_MARGIN
    },
    layoutAvatar: {
      marginRight: Dimensions.COMMON_INNER_MARGIN
    },
    layoutContent: {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start"
    },
    avatar: {},
    content: {}
  }),
  [Strings.MESSAGE_POSITION_RIGHT]: StyleSheet.create({
    layoutContainer: {
      flex: 1,
      margin: Dimensions.COMMON_MARGIN,
      flexDirection: "column"
    },
    container: {},
    layoutTime: {
      padding: Dimensions.COMMON_INNER_PADDING,
      justifyContent: "center",
      alignItems: "center"
    },
    layoutBody: {
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    layoutName: {
      marginBottom: Dimensions.COMMON_INNER_MARGIN
    },
    layoutAvatar: {
      marginLeft: Dimensions.COMMON_INNER_MARGIN
    },
    layoutContent: {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-end"
    },
    avatar: {},
    content: {}
  })
};
