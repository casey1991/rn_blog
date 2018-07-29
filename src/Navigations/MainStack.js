import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../Screens/Main/Home";
import { MessagesScreen } from "../Screens/Main/Messages";
import { ProfileScreen } from "../Screens/Main/Mine";
export const MainStack = createMaterialBottomTabNavigator({
  Home: createStackNavigator({ HomeScreen }),
  Messages: createStackNavigator({ MessagesScreen }),
  Profile: createStackNavigator({ ProfileScreen })
});
