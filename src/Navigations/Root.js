import { createSwitchNavigator } from "react-navigation";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";

export const Root = createSwitchNavigator({
  AppStack: AppStack,
  AuthStack: AuthStack
});
