import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialTopTabBar } from "react-navigation-tabs";
import { Constants } from "expo";
import { Colors } from "../../../Themes";
import { createMaterialTopTabNavigator } from "react-navigation";
import { HomeAllScreen } from "./All";
import { HomeOtherScreen } from "./Other";
const styles = StyleSheet.create({
  tab: {
    height: 64
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
export const HomeTabScreen = createMaterialTopTabNavigator(
  { HomeAllScreen, HomeOtherScreen },
  {
    tabBarComponent: MaterialTopTabBarWithStatusBar,
    tabBarOptions: {
      tabStyle: styles.tab
    }
  }
);
