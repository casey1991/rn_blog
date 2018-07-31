import React, { Component } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, color, size } = this.props;
    return (
      <MaterialIcons
        style={{ backgroundColor: "transparent" }}
        name={icon}
        color={color}
        size={size ? size : 24}
      />
    );
  }
}
