import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { Constants } from "expo";
import { MaterialTopTabBar } from "react-navigation-tabs";
import { HomeScreen } from "../Screens/Main/Home";
import { SearchScreen } from "../Screens/Main/Search";
import { MessagesScreen } from "../Screens/Main/Messages";
import { ProfileScreen } from "../Screens/Main/Mine";
import { Colors } from "../Themes";
import { Icon } from "../Components/Common/Icon/Icon";
const styles = StyleSheet.create({
  tab: {
    height: 50
  }
});
function MaterialTopTabBarWithStatusBar(props) {
  console.log(props);
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colors.PRIMARY
      }}
    >
      <MaterialTopTabBar
        {...props}
        jumpToIndex={() => {}}
        style={{ backgroundColor: Colors.PRIMARY }}
        indicatorStyle={{ backgroundColor: Colors.WHITE }}
      />
    </View>
  );
}
export const MainStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator(
        {
          screen: createMaterialTopTabNavigator(
            { HomeScreen, SearchScreen },
            {
              tabBarComponent: MaterialTopTabBarWithStatusBar,
              tabBarOptions: {
                tabStyle: styles.tab
              }
            }
          )
        },
        {
          headerMode: "none"
        }
      ),
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon icon="home" color={tintColor} />
        )
      }
    },
    Search: {
      screen: createStackNavigator({ SearchScreen }),
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon icon="search" color={tintColor} />
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
