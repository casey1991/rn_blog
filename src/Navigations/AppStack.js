import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { withTheme } from "react-native-paper";
import { HomeStack } from "./HomeStack";
import { MineStack } from "./MineStack";
import { MessageStack } from "./MessageStack";
export const AppStack = createMaterialBottomTabNavigator(
  {
    HomeStack,
    MessageStack,
    MineStack
  },
  {
    activeTintColor: "#FFF"
  }
);
