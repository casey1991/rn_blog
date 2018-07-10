import { createBottomTabNavigator } from "react-navigation";
import { HomeStack } from "./HomeStack";
import { MineStack } from "./MineStack";
import { MessageStack } from "./MessageStack";
export const AppStack = createBottomTabNavigator({
  HomeStack,
  MessageStack,
  MineStack
});
