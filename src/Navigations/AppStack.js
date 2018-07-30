import { createStackNavigator } from "react-navigation";
import { MainStack } from "./MainStack";
import { ArticleStack } from "./ArticleStack";
import { ProfileStack } from "./ProfileStack";
export const AppStack = createStackNavigator(
  {
    MainStack,
    ArticleStack,
    ProfileStack
  },
  {
    headerMode: "none"
  }
);
