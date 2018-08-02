import { createStackNavigator } from "react-navigation";
import { MainStack } from "./MainStack";
import { ArticleStack } from "./ArticleStack";
import { ProfileStack } from "./ProfileStack";
import { ChatStack } from "./ChatStack";
export const AppStack = createStackNavigator(
  {
    MainStack,
    ArticleStack,
    ProfileStack,
    ChatStack
  },
  {
    headerMode: "none"
  }
);
