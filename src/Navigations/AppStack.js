import { createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from "../Screens/Home";
import { MyScreen } from "../Screens/My";
export const AppStack = createBottomTabNavigator({
  Home: HomeScreen,
  My: MyScreen
});
