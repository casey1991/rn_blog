import { createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from "../Screens/Home";
export const AppStack = createBottomTabNavigator({
  Home: HomeScreen
});
