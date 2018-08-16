import React, { Component } from "react";
import { Appbar } from "react-native-paper";
import { styles } from "./Toolbar.styles";
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
        <Appbar>{children}</Appbar>
      </SafeAreaView>
    );
  }
}
