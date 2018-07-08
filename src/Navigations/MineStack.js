import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../Screens/Login";
import { ProfileScreen } from "../Screens/Mine";
import { SettingScreen } from "../Screens/Mine/Setting";
export const MineStack = createStackNavigator({
  Profile: ProfileScreen,
  Login: LoginScreen,
  Setting: SettingScreen
});
