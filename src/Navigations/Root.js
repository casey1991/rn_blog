import { createStackNavigator } from "react-navigation";
import { AppStack } from "./AppStack";

export const Root = createStackNavigator(
  {
    AppStack
  },
  { headerMode: "none" }
);
