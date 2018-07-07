import { createBottomTabNavigator } from "react-navigation";
import { HomeStack } from "./HomeStack";
import { MineStack } from "./MineStack";
export const AppStack = createBottomTabNavigator({
  HomeStack,
  MineStack
});
