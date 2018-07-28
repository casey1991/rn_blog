import { createStackNavigator } from "react-navigation";
import { ProfileScreen } from "../Screens/Mine";
import { SettingScreen } from "../Screens/Mine/Setting";
export const MineStack = createStackNavigator({
  Profile: ProfileScreen,
  Setting: SettingScreen
});
