import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../Screens/Main/Home";
import { MessagesScreen } from "../Screens/Main/Messages";
import { ProfileScreen } from "../Screens/Main/Mine";
import { Colors } from "../Themes";
import { Icon } from "../Components/Common/Icon/Icon";
export const MainStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({ HomeScreen }),
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon icon="home" color={tintColor} />
        )
      }
    },
    Messages: {
      screen: createStackNavigator({ MessagesScreen }),
      navigationOptions: {
        title: "Message",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon icon="message" color={tintColor} />
        )
      }
    },
    Profile: {
      screen: createStackNavigator({ ProfileScreen }),
      navigationOptions: {
        title: "Account",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon icon="account-box" color={tintColor} />
        )
      }
    }
  },
  {
    barStyle: {
      backgroundColor: Colors.PRIMARY
    }
  }
);
