import React, { Component } from "react";
import { View } from "react-native";
import { Button as PButton, withTheme } from "react-native-paper";
import { styles } from "./Button.styles";

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <View style={[styles.container]}>
        <PButton {...rest}>{children}</PButton>
      </View>
    );
  }
}
