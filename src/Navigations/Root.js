import { createStackNavigator } from "react-navigation";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Root = createStackNavigator(
  {
    AppStack,
    AuthStack
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);
