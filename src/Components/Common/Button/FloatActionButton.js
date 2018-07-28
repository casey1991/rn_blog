import React, { Component } from "react";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { styles } from "./FloatActionButton.styles";

export class FloatActionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;
    return (
      <View style={[styles.container]}>
        <FAB {...rest} icon="add" />
      </View>
    );
  }
}
