import React, { Component } from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";

export class ToolbarContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Appbar.Content {...this.props} />;
  }
}
