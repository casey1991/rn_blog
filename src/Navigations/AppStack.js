import { createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from "../Modules/Home";
export const AppStack = createBottomTabNavigator({
  Home: HomeScreen
});
