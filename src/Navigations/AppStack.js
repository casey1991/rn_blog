import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
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
    // headerMode: "none"
  }
);
