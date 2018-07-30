import { createStackNavigator } from "react-navigation";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Root = createStackNavigator(
  {
    AppStack,
    AuthStack
  },
  {
    initialRouteName: "AppStack",
    headerMode: "none",
    mode: "modal"
  }
);
