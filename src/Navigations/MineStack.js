import { createStackNavigator } from "react-navigation";
import { ProfileScreen } from "../Screens/Mine";
import { SettingScreen } from "../Screens/Mine/Setting";
import { AuthStack } from "./AuthStack";
export const MineStack = createStackNavigator({
  Profile: ProfileScreen,
  Setting: SettingScreen,
  AuthStack
});
