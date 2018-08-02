import { createStackNavigator } from "react-navigation";
import { MessageScreen } from "../Screens/Message/Message";
export const ChatStack = createStackNavigator(
  {
    Message: MessageScreen
  },
  {
    headerMode: "none"
  }
);
