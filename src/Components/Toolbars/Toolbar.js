import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { Appbar } from "react-native-paper";
import { styles, statusBarBackgroundColor } from "./Toolbar.styles";
import { SafeAreaView } from "react-navigation";

export class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <SafeAreaView
        style={[styles.container]}
        forceInset={{ top: "always", bottom: "never" }}
      >
        <View>
          <StatusBar
            barStyle="light-content"
            backgroundColor={statusBarBackgroundColor}
          />
          <Appbar>{children}</Appbar>
        </View>
      </SafeAreaView>
    );
  }
}
