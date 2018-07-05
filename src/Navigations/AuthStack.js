import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../Screens/Login";
export const AuthStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {}
);
