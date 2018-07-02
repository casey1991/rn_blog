import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../Modules/Login";
export const AuthStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    headerMode: "none"
  }
);
