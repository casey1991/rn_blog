import { createStackNavigator } from "react-navigation";
import { MainStack } from "./MainStack";
// import { AuthStack } from "./AuthStack";
import { ProfileStack } from "./ProfileStack";
export const AppStack = createStackNavigator(
  {
    MainStack,
    // AuthStack,
    ProfileStack
  },
  {
    headerMode: "none"
  }
);
