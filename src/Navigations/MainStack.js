import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../Screens/Main/Home";
import { MessagesScreen } from "../Screens/Main/Messages";
import { ProfileScreen } from "../Screens/Main/Mine";
import { Colors } from "../Themes";
export const MainStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({ HomeScreen }),
      navigationOptions: { title: "Home" }
    },
    Messages: {
      screen: createStackNavigator({ MessagesScreen }),
      navigationOptions: {
        title: "Message"
      }
    },
    Profile: {
      screen: createStackNavigator({ ProfileScreen }),
      navigationOptions: {
        title: "Mine"
      }
    }
  },
  {
    barStyle: {
      backgroundColor: Colors.PRIMARY
    }
  }
);
