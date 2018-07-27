import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./Actionbar.styles";

export class Actionbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <View style={[styles.container]}>{children}</View>;
  }
}
