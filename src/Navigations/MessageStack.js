import { createStackNavigator } from "react-navigation";
import { MessagesScreen } from "../Screens/Message";
import { MessageScreen } from "../Screens/Message/Message";
export const MessageStack = createStackNavigator({
  Message: MessageScreen, // now message first just for testing
  Messages: MessagesScreen
});
