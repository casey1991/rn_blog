import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../Screens/Login";
import { ProfileScreen } from "../Screens/Mine";
export const MineStack = createStackNavigator({
  Profile: ProfileScreen,
  Login: LoginScreen
});
